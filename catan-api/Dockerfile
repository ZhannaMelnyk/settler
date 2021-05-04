FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.sln .

COPY Catan.API/*.csproj ./Catan.API/
COPY Catan.Logic/*.csproj ./Catan.Logic/
COPY Catan.Data/*.csproj ./Catan.Data/

RUN dotnet restore

# Copy everything else and build
COPY Catan.API/. ./Catan.API/
COPY Catan.Logic/. ./Catan.Logic/
COPY Catan.Data/. ./Catan.Data/

WORKDIR /app/Catan.API
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build-env /app/Catan.API/out ./
ENTRYPOINT ["dotnet", "Catan.API.dll"]