ALTER PROCEDURE [dbo].[spi_prod_busqueda](@ve_session varchar(100),@ve_string varchar(1000))
AS
BEGIN

--Limpiar tabla
DELETE INF_PROD_BUSQUEDA
WHERE FECHA_INF_PROD_BUSQUEDA < dateadd(hour, -1, GETDATE())

DELETE INF_PROD_BUSQUEDA
WHERE SESSION_ID = @ve_session

declare
	  @vc_cod_inf_pros_busqueda			numeric(10,0)
	  ,@vc_fecha_inf_prod_busqueda			datetime
	  ,@vc_session_id						varchar(1000)
	  ,@vc_string							varchar(1000)
	  
	  set @vc_fecha_inf_prod_busqueda = GETDATE();
	  
DECLARE C_PRODUCTO CURSOR FOR	  
SELECT item
FROM dbo.f_split(@ve_string, ' ')
	  
OPEN C_PRODUCTO
FETCH C_PRODUCTO INTO @vc_string
WHILE @@FETCH_STATUS = 0 BEGIN
	  INSERT INTO INF_PROD_BUSQUEDA 
			 (FECHA_INF_PROD_BUSQUEDA
			 ,SESSION_ID
			 ,COD_PRODUCTO
			 ,COD_ATRIBUTO_PRODUCTO
			 ,CAMPO_UBICACION
			 ,PALABRA
			 ,PALABRA_FIND
			 )
	  SELECT @vc_fecha_inf_prod_busqueda
			 ,@ve_session						
			 ,cod_producto						
			 ,cod_atributo_producto
			 ,CAMPO_UBICACION
			 ,palabra
			 ,@vc_string
	  FROM producto_busqueda 
	  WHERE PALABRA COLLATE SQL_LATIN1_GENERAL_CP1_CI_AI like '%'+@vc_string+'%'
	    and dbo.f_prod_web (COD_PRODUCTO) = 'S'

	  ---------- PLURAL --------------------------
	  INSERT INTO INF_PROD_BUSQUEDA 
			 (FECHA_INF_PROD_BUSQUEDA
			 ,SESSION_ID
			 ,COD_PRODUCTO
			 ,COD_ATRIBUTO_PRODUCTO
			 ,CAMPO_UBICACION
			 ,PALABRA
			 ,PALABRA_FIND
			 )
	  SELECT @vc_fecha_inf_prod_busqueda
			 ,@ve_session						
			 ,cod_producto						
			 ,cod_atributo_producto
			 ,CAMPO_UBICACION
			 ,palabra
			 ,@vc_string
	  FROM producto_busqueda 
	  WHERE case Right(PALABRA,1)
				when 'A' then PALABRA + 's'
				when 'E' then PALABRA + 's'
				when 'I' then PALABRA + 's'
				when 'O' then PALABRA + 's'
				when 'U' then PALABRA + 's'
				else PALABRA + 'es'
			end COLLATE SQL_LATIN1_GENERAL_CP1_CI_AI like '%'+@vc_string+'%'
	    and dbo.f_prod_web (COD_PRODUCTO) = 'S'
	-----------------------------------
	
	
	FETCH C_PRODUCTO INTO @vc_string
END
CLOSE C_PRODUCTO
DEALLOCATE C_PRODUCTO


DECLARE C_INF INSENSITIVE CURSOR FOR	  
SELECT cod_producto
FROM INF_PROD_BUSQUEDA
WHERE SESSION_ID = @ve_session
group by cod_producto
having count(*) > 1

declare
	@vc_cod_producto			varchar(100)
	,@vl_cod_inf_prod_busqueda	numeric
	
OPEN C_INF
FETCH C_INF INTO @vc_cod_producto
WHILE @@FETCH_STATUS = 0 BEGIN
	select top 1 @vl_cod_inf_prod_busqueda = COD_INF_PROD_BUSQUEDA
	from INF_PROD_BUSQUEDA
	where COD_PRODUCTO = @vc_cod_producto
	AND SESSION_ID = @ve_session
	order by case CAMPO_UBICACION
				when 'COD_PRODUCTO' then 1
				when 'NOM_PRODUCTO' then 2
				when 'NOM_ATRIBUTO' then 3
			   end
				,ISNULL(cod_atributo_producto, 9999999999)
	
	delete INF_PROD_BUSQUEDA
	where COD_PRODUCTO = @vc_cod_producto
	  and cod_inf_prod_busqueda <> @vl_cod_inf_prod_busqueda
	  AND SESSION_ID = @ve_session
	
	FETCH C_INF INTO @vc_cod_producto
END
CLOSE C_INF
DEALLOCATE C_INF

END