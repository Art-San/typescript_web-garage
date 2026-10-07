const testUrl =
  'https://specauto-tomsk.ru/vyvoz-musora/?ifso=zakaz-vyv&etext=2202.DVF2u4NVG9U0ekT1fdp_4_Y0EKIhsytq3hDHv8RqSXpPDLzuFG-6W0uLqVa6-k-UZWx2d3lhY255ZGRybXZ'

// var sourcePath = referrerUrl.pathname.replace(/\/{2,}/g, '/');
const url = new URL(testUrl)

const sourcePath = url.pathname.replace(/\/{2,}/g, '/')

console.log(sourcePath)
