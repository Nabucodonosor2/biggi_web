ALTER PROCEDURE [dbo].[spdw_listado_producto_new](@ve_cod_familia	numeric)
/*
* este procedimiento es igual a spdw_listado_producto, solo se esta cambiando que los atributos
* se le concatene <ol> y no <li>, para la nueva paguina web de biggi, que es responsiva 
*/
AS
BEGIN

	set LANGUAGE Spanish
	
	DECLARE @TEMPO TABLE  
		(ID									numeric identity
		,COD_PRODUCTO1						varchar(100)
		,NOM_PRODUCTO1						varchar(100)
		,ATRIBUTOS1							text
		,PRECIO1							numeric
		
		,COD_PRODUCTO2						varchar(100)
		,NOM_PRODUCTO2						varchar(100)
		,ATRIBUTOS2							text
		,PRECIO2							numeric
		,DISPLAY2							varchar(100)
		)

	declare C_PROD cursor for
	SELECT P.COD_PRODUCTO						
			,P.NOM_PRODUCTO						
			,P.PRECIO_VENTA_PUBLICO								
	from PRODUCTO P, FAMILIA_PRODUCTO FP
	where FP.COD_FAMILIA = @ve_cod_familia
	  and COD_TIPO_PRODUCTO not in (4, 5) -- gasto fijo, descontinuado
	  and P.COD_PRODUCTO = FP.COD_PRODUCTO
	ORDER BY ORDEN ASC

	declare
		@vc_cod_producto		varchar(100)
		,@vc_nom_producto		varchar(100)
		,@vc_precio				numeric
		,@i						numeric
		,@vl_id					numeric
		,@vl_atributo			varchar(8000)
		
	set @i = 1
	OPEN C_PROD
	FETCH C_PROD INTO @vc_cod_producto, @vc_nom_producto, @vc_precio
	WHILE @@FETCH_STATUS = 0 BEGIN
		
		DECLARE @VL_OBTENER_DESDE4D  VARCHAR(1)
    		
    	SELECT  @VL_OBTENER_DESDE4D = OBTENER_DESDE4D
		FROM PRODUCTO 	
		WHERE COD_PRODUCTO = @vc_cod_producto 

		IF(@VL_OBTENER_DESDE4D = 'S') BEGIN
			DECLARE C_ATRIB_PROD CURSOR FOR
			SELECT NOM_ATRIBUTO_PRODUCTO
			FROM ATRIBUTO_PRODUCTO_4D
			WHERE COD_PRODUCTO = @vc_cod_producto
			ORDER BY ORDEN
		END	
		ELSE IF (@VL_OBTENER_DESDE4D = 'N')BEGIN
		
			DECLARE C_ATRIB_PROD CURSOR FOR
			SELECT NOM_ATRIBUTO_PRODUCTO
			FROM ATRIBUTO_PRODUCTO
			WHERE COD_PRODUCTO = @vc_cod_producto
			ORDER BY ORDEN
		END 
		
		declare
			@vc_nom_atributo_producto	varchar(2000)
		
		SET @vl_atributo = ''
		OPEN C_ATRIB_PROD
		FETCH C_ATRIB_PROD INTO @vc_nom_atributo_producto
		WHILE @@FETCH_STATUS = 0
		BEGIN
			IF(@VL_OBTENER_DESDE4D = 'S') BEGIN
			
				SELECT @vc_nom_producto =NOM_PRODUCTO
				FROM PRODUCTO_4D
				WHERE COD_PRODUCTO = @vc_cod_producto
			END
			
			set @vl_atributo = @vl_atributo+'<ol>'+ @vc_nom_atributo_producto +'</ol>'

		FETCH C_ATRIB_PROD INTO @vc_nom_atributo_producto
		END
		CLOSE C_ATRIB_PROD
		DEALLOCATE C_ATRIB_PROD
	
		if (@i % 2 = 0)	--par
			update @TEMPO
			set COD_PRODUCTO2 = @vc_cod_producto
				,NOM_PRODUCTO2 = @vc_nom_producto
				,ATRIBUTOS2	= @vl_atributo
				,PRECIO2 = @vc_precio
				,DISPLAY2 = ''
			where id = @vl_id
			
		else begin --impar
			insert into @TEMPO
				(COD_PRODUCTO1
				,NOM_PRODUCTO1						
				,ATRIBUTOS1												
				,PRECIO1								
				,DISPLAY2
				)
			values
				(@vc_cod_producto
				,@vc_nom_producto
				,@vl_atributo
				,@vc_precio
				,'none'
				)
			set @vl_id = @@IDENTITY
		end
		
		set @i = @i + 1
		FETCH C_PROD INTO @vc_cod_producto, @vc_nom_producto, @vc_precio
	END
	CLOSE C_PROD
	DEALLOCATE C_PROD

	select *  from @TEMPO
END