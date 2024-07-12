/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js}"],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
       whitesmoke:'#f0f0f0',
       container_bg:"#00000080",
       rightColor:"#00000063",
       input_bg : '#f5f5f5f3',
       input_border : '#000000e5',
       button_bg : '#010101',
       button_border : ':#303030ea',
       'red-255' : 'rgb(255, 0, 0)',
       'black-00' : 'rgba(0, 0, 0, 0.916)'
       


      },


      width: {
        '1300': '1300px',
        '1200': '1200px',
        '1100': '1100px',
        '1000': '1000px',
        '80perc' : '80%',
        '650':'650px' ,
        '320' : '320px',
        '365' : '365px',
        '700' : '700px',
        
         
      },

      height:{
        'total-header' : '6rem',
        '80perc' : '80%',
        '130' : '130px',
        '600': '600px',
        '700' : '700px',
        '500': '500px',
        '22' : '22px',
       
      },

      spacing : {
        '25' : '25px',
        '38' : '38px',
        '30' : '30px',
        '70' : '70px',
        '90' : '90px',
        '100' : '100px',
        '40rem' : '40rem',
        '5.5' : '5.5rem',
        '0.85':'0.85rem'
        
      },

      fontSize:{
        'xs8': '8px',
        'xs10': '10px',
        'xs14': '14px'

      },

      fontWeight : {
        'medium-1': '550'
      },

      fontFamily : {
        Arial : 'Arial, Helvetica, sans-serif',
        Dune:['"Dune Rise"', 'sans-serif']
      },

      boxShadow:{
        a1:'0 0 10px rgba(0, 0, 0 , 0.5)'
      },

      borderWidth:{
        '1.7':' 1.7px',
        '1.5' : '1.5px'
      },

      screens:{
        'xsm' : '250px',
        'sm-mobile' : '320px',
        'mobile' : '480px',


      },

     


    },

    

  },
  plugins: [],
}


