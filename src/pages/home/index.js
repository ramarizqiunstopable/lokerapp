
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Jumbotron from '../../components/Jumbotron'

const Home = () => {
  const [dataLok, setDataLok] = useState(null)

useEffect(() =>{
axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
.then((res) =>{
  
  setDataLok(res. data.data)
})
},[])

console.log(dataLok)

function formatRupiah(angka, prefix){
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
  split   		= number_string.split(','),
  sisa     		= split[0].length % 3,
  rupiah     		= split[0].substr(0, sisa),
  ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if(ribuan){
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

const handleText = (text,max) => {
  if(text === null) {
    return ""
  } else if(text.length >7){
 return text.slice(0,max) +"..."
  }else{

    return text
  }
}


  return (
    <>
        <Jumbotron/>
        <div className='flex flex-wrap gap-10 py-10 '>

      {/*Cards*/}
      {
        dataLok !== null && dataLok.map((res) => {
          return(
            <div key={res.id}  className="flex flex-col w-full p-6 overflow-hidden bg-white shadow-lg lg:max-w-xs rounded-xl dark:bg-gray-800">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="flex items-center justify-start flex-grow w-full">
                <span className="relative block">
                  <img alt="profil" src={res.company_image_url} className="object-cover w-10 h-10 mx-auto rounded-full " />
                </span>
                <div className="flex flex-col items-start ml-4">
                  <span className="text-gray-700 dark:text-white">
                    {res.company_name}
                  </span>
                  <span className="text-sm font-light text-gray-400 dark:text-gray-300">
                    {res. company_city}
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 mb-2 text-lg text-gray-800 dark:text-white">
              {res.title}
            </p>
            <p className="text-sm font-normal text-gray-400 grow">
              {handleText(res.job_description, 100)}
            </p>
            <div className="flex items-center justify-between p-2 my-6 bg-blue-100 rounded">
              <div className="flex items-start justify-between w-full">
                <p className="flex-grow w-full text-2xl text-gray-700">
                  <span className="font-light text-gray-400 text-md">
                    IDR
                  </span>
                  {formatRupiah(res?.salary_min +"")}
                  <span className="text-sm font-light text-gray-400">
                    /Month
                  </span>
                </p>
                <span className="flex-none px-3 py-1 text-sm text-indigo-500 border border-indigo-500 rounded-full">
                  {res.job_tenure}
                </span>
              </div>
            </div>
          </div>


          )
        })
      }

  



           </div>
        
        

    </>
  )
}

export default Home
