ALTER PROCEDURE [dbo].[spdw_lista_busqueda_new](@ve_session varchar(100))
AS
BEGIN

	SET LANGUAGE Spanish
	
	DECLARE @TEMPO TABLE  
		(ID									numeric identity
		,COD_PRODUCTO1						varchar(1000)
		,NOM_PRODUCTO1						varchar(1000)
		,ATRIBUTOS1							text
		,PRECIO1							numeric
		)

	declare C_PROD cursor for
	
	
	SELECT P.COD_PRODUCTO						
			,P.NOM_PRODUCTO						
			,P.PRECIO_VENTA_PUBLICO	
			,INF.COD_ATRIBUTO_PRODUCTO
			,INF.PALABRA
			,INF.PALABRA_FIND
	from PRODUCTO P, INF_PROD_BUSQUEDA INF
	where INF.SESSION_ID = @ve_session
	  and P.COD_PRODUCTO = INF.COD_PRODUCTO
	  order by case INF.CAMPO_UBICACION
				when 'COD_PRODUCTO' then 1
				when 'NOM_PRODUCTO' then 2
				when 'NOM_ATRIBUTO' then 3
			   end
			   ,P.NOM_PRODUCTO
	  
	declare
		@vc_cod_producto		varchar(1000)
		,@vc_nom_producto		varchar(1000)
		,@vc_precio				numeric
		,@i						numeric
		,@vl_id					numeric
		,@vl_atributo			varchar(8000)
		,@vc_cod_atributo		numeric
		,@vc_palabra			varchar(100)
		,@vc_palabra_find		varchar(100)
		
	set @i = 1
	OPEN C_PROD
	FETCH C_PROD INTO @vc_cod_producto, @vc_nom_producto, @vc_precio ,@vc_cod_atributo, @vc_palabra, @vc_palabra_find
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
			
			set @vl_atributo = @vl_atributo+'<p>'+ @vc_nom_atributo_producto +'</p>'

		FETCH C_ATRIB_PROD INTO @vc_nom_atributo_producto
		END
		CLOSE C_ATRIB_PROD
		DEALLOCATE C_ATRIB_PROD
	
		set @vc_nom_producto = replace(@vc_nom_producto, @vc_palabra_find, '<strong>'+@vc_palabra_find+'</strong>')
		set @vl_atributo = replace(@vl_atributo, @vc_palabra_find, '<strong>'+@vc_palabra_find+'</strong>')
		
			insert into @TEMPO
				(COD_PRODUCTO1
				,NOM_PRODUCTO1						
				,ATRIBUTOS1						
				,PRECIO1								
				)
			values
				(@vc_cod_producto
				,@vc_nom_producto
				,@vl_atributo
				,@vc_precio
				)
			set @vl_id = @@IDENTITY
		
		set @i = @i + 1
		FETCH C_PROD INTO @vc_cod_producto, @vc_nom_producto, @vc_precio ,@vc_cod_atributo, @vc_palabra, @vc_palabra_find
	END
	CLOSE C_PROD
	DEALLOCATE C_PROD

	select *  from @TEMPO
END