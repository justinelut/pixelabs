import axios from 'axios'
import { useEffect } from 'react';

function Payment() {

  useEffect(()=>{
    async function getdata(){
      const orders = await axios.get('https://fusion.verixr.com/api/orders')
      console.log(orders)
    }

    getdata()
  }, [])
  return <>
  Payments
  </>;
}


export default Payment;


