ALTER FUNCTION [dbo].[f_prod_busq_palabra](@ve_string varchar(MAX))
RETURNS @List TABLE (item VARCHAR(8000))
BEGIN
DECLARE @sItem VARCHAR(8000)

DECLARE C_STRING CURSOR FOR 
	SELECT UPPER(item)
	FROM dbo.f_split(@ve_string, ' ') WHERE LEN(item) > 2
	
		
	declare @vc_string varchar(MAX)
		
OPEN C_STRING
FETCH C_STRING INTO @vc_string
WHILE @@FETCH_STATUS = 0 BEGIN

	set @vc_string = REPLACE(@vc_string,'�','A')
	set @vc_string = REPLACE(@vc_string,'�','A')
	set @vc_string = REPLACE(@vc_string,'�','E')
	set @vc_string = REPLACE(@vc_string,'�','E')
	set @vc_string = REPLACE(@vc_string,'�','I')
	set @vc_string = REPLACE(@vc_string,'�','I')
	set @vc_string = REPLACE(@vc_string,'�','O')
	set @vc_string = REPLACE(@vc_string,'�','O')
	set @vc_string = REPLACE(@vc_string,'�','U')
	set @vc_string = REPLACE(@vc_string,'�','U')
	set @vc_string = REPLACE(@vc_string,'�','U')
	set @vc_string = REPLACE(@vc_string,':','')

	INSERT INTO @List SELECT @vc_string
	
FETCH C_STRING INTO @vc_string
END
CLOSE C_STRING
DEALLOCATE C_STRING

RETURN
END