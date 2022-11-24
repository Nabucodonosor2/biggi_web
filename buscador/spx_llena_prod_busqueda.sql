alter PROCEDURE spx_llena_prod_busqueda
AS 
BEGIN

DECLARE C_PROD CURSOR FOR

SELECT COD_PRODUCTO
FROM PRODUCTO
where dbo.f_prod_web (COD_PRODUCTO) = 'S'
	
declare 
	@vc_cod_producto				varchar(100)
	,@vc_nom_atributo_producto		varchar(1000)
	,@vc_cod_atributo_producto		numeric
		
OPEN C_PROD
FETCH C_PROD INTO @vc_cod_producto
WHILE @@FETCH_STATUS = 0 BEGIN
	exec spu_producto 'PRODUCTO_BUSQUEDA', @vc_cod_producto
	
	FETCH C_PROD INTO @vc_cod_producto
END
CLOSE C_PROD
DEALLOCATE C_PROD

END