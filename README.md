# time-tracker

```
dotnet aspnet-codegenerator controller --controllerName TestController --noViews --restWithNoViews --model Task --dataContext ApplicationDbContext --useAsyncActions
```

```
dotnet swagger tofile --output ../swagger.json ./bin/Debug/net7.0/TimeTracker.dll v1
```

```
docker run --rm \
    -v $PWD:/local openapitools/openapi-generator-cli generate \
    -i /local/swagger.json \
    -g typescript-fetch \
    -o /local/generated/
```
