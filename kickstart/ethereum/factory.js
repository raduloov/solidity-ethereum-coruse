import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x466F2306324ec94cb1C111ba7Af5fC315aEea035"
);

export default instance;
