const fs = require('fs')
let data = [
    {
      "sl.no": 1,
      "District": "Thiruvananthapuram",
      "Mobile Number": 9497711281,
      "Landline Number": "0471-2730045"
    },
    {
      "sl.no": 2,
      "District": "Kollam",
      "Mobile Number": 9447677800,
      "Landline Number": "0474-2794002"
    },
    {
      "sl.no": 3,
      "District": "Pathanamthitta",
      "Mobile Number": 8078808915,
      "Landline Number": "0468-2322515"
    },
    {
      "sl.no": 4,
      "District": "Alappuzha",
      "Mobile Number": 9495003640,
      "Landline Number": "0477-2238630"
    },
    {
      "sl.no": 5,
      "District": "Kottayam",
      "Mobile Number": 9446562236,
      "Landline Number": "0481-2566300"
    },
    {
      "sl.no": 6,
      "District": "Idukki",
      "Mobile Number": 9383463036,
      "Landline Number": "04862-233111"
    },
    {
      "sl.no": 7,
      "District": "Ernakulam",
      "Mobile Number": 9400021077,
      "Landline Number": "0484-2423513"
    },
    {
      "sl.no": 8,
      "District": "Thrissur",
      "Mobile Number": 9447074424,
      "Landline Number": "0487-2362424"
    },
    {
      "sl.no": 9,
      "District": "Palakkad",
      "Mobile Number": 8921994727,
      "Landline Number": "0491-2505309"
    },
    {
      "sl.no": 10,
      "District": "Malappuram",
      "Mobile Number": 9383464212,
      "Landline Number": "0483-2736320"
    },
    {
      "sl.no": 11,
      "District": "Kozhikode",
      "Mobile Number": 9446538900,
      "Landline Number": "0495-2371002"
    },
    {
      "sl.no": 12,
      "District": "Wayanad",
      "Mobile Number": 8078409770,
      "Landline Number": "04936-204151"
    },
    {
      "sl.no": 13,
      "District": "Kannur",
      "Mobile Number": 9446682300,
      "Landline Number": "0497-2713266"
    },
    {
      "sl.no": 14,
      "District": "Kasargod",
      "Mobile Number": 9446601700,
      "Landline Number": "0499-4257700"
    }
]

let result = ''
data.forEach(item=>{

let component = `
<div class="max-w-xl mx-auto w-full mt-4">
    <div class="bg-white hover:bg-gray-100 dark:hover:bg-gray-1000 dark:bg-gray-1200 dark:text-gray-300 shadow-md rounded-md mx-2 md:mx-auto px-3 py-4">
        <div class="flex items-center justify-between mb-2 px-2">
        <div class="flex items-center dark:text-gray-500">
            <span class="text-base xs:text-lg font-semibold">${item.District}</span>
        </div>
        <span class=" text-green-600 dark:bg-gray-900 flex items-center text-xs bg-gray-100 py-1 px-2 rounded-full mt-1 md:mt-0"
            ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg><span class="ml-1 dark:text-gray-400">Verified</span></span
        >
        </div>
        <div class="md:flex w-full">
        <a href="tel:${item['Mobile Number']}" class="flex items-center space-x-4 mx-1 my-2 bg-gray-600 hover:bg-gray-700 rounded-md cursor-pointer text-gray-200 w-full md:w-1/2 px-6 py-2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
            <span  class="ml-2 text-base xs:text-lg">${item['Mobile Number']}</span>
        </a>
        <a href="tel:${item['Landline Number']}" class="flex items-center space-x-4 mx-1 my-2 bg-gray-600 hover:bg-gray-700 rounded-md cursor-pointer text-gray-200 w-full md:w-1/2 px-6 py-2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
            <span  class="ml-2 text-base xs:text-lg">${item['Landline Number']}</span>
        </a>
        </div>
    </div>
</div>
`
    result += component
})

fs.writeFile(`${process.cwd()}/utils/build/lists-build.html`, result, (err) => { 
    
    // In case of a error throw err. 
    if (err) throw err; 
}) 