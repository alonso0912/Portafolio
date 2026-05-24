# Prueba simple de latencia de la API (RNF-02)
# Uso: .\scripts\test-api-latency.ps1 -BaseUrl "https://tu-sitio.netlify.app"

param(
  [string]$BaseUrl = "http://localhost:5000",
  [int]$Requests = 20
)

$endpoints = @(
  "/api/profile",
  "/api/projects",
  "/api/skills",
  "/api/resume",
  "/api/services"
)

$times = @()

foreach ($endpoint in $endpoints) {
  for ($i = 0; $i -lt $Requests; $i++) {
    $sw = [System.Diagnostics.Stopwatch]::StartNew()
    try {
      Invoke-WebRequest -Uri "$BaseUrl$endpoint" -UseBasicParsing | Out-Null
      $sw.Stop()
      $times += $sw.ElapsedMilliseconds
    } catch {
      Write-Warning "Error en $endpoint : $_"
    }
  }
}

if ($times.Count -eq 0) {
  Write-Error "No se obtuvieron mediciones."
  exit 1
}

$sorted = $times | Sort-Object
$p95Index = [Math]::Ceiling($sorted.Count * 0.95) - 1
$p95 = $sorted[[Math]::Max(0, $p95Index)]]
$avg = [Math]::Round(($times | Measure-Object -Average).Average, 2)

Write-Host "Muestras: $($times.Count)"
Write-Host "Promedio: ${avg} ms"
Write-Host "P95: ${p95} ms"
Write-Host "Objetivo RNF-02: P95 < 500 ms -> $(if ($p95 -lt 500) { 'CUMPLE' } else { 'REVISAR' })"
