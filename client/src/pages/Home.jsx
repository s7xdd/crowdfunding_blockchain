import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    console.log("getCampaigns",getCampaigns)
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    console.log("data",data)
    setIsLoading(false);
  }

useEffect(() => {
  console.log("contract",contract)

}, [contract])

  useEffect(() => {
    if(contract) fetchCampaigns();
    console.log("contract",contract)
    console.log("address",address)


  }, [address, contract]);

  return (
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Home