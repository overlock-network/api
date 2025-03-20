package docs

import (
	"embed"
)

//go:embed swagger-ui/swagger.yaml
var SwaggerYAML embed.FS
