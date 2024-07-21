import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(CampaignFactory.abi, "0x754dc9492395d1557BfCD3E264551cb945938980");

export default instance;
