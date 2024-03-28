import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Explore = () => {
  return (
      <div className=' bg-[rgb(255,251,247)] flex pt-6 justify-center h-full w-full'>
          <div className=' h-full w-4/5'>
              <h1 className=' text-3xl mb-4 font-semibold text-[rgb(54,54,54)]'>Explore options near me</h1>
        <Accordion sx={{ "marginBottom": "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{"fontSize":"20px"}}>Popular cuisines near me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{  "opacity":"0.7"}}>
              <a href="https://www.zomato.com/bakery-restaurants-near-me" class="sc-cmIlrE bkCYal">Bakery food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/bengali-restaurants-near-me" class="sc-cmIlrE bkCYal">Bengali food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/beverages-restaurants-near-me" class="sc-cmIlrE bkCYal">Beverages food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/biryani-restaurants-near-me" class="sc-cmIlrE bkCYal">Biryani food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/burger-restaurants-near-me" class="sc-cmIlrE bkCYal">Burger food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/chinese-restaurants-near-me" class="sc-cmIlrE bkCYal">Chinese food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/continental-restaurants-near-me" class="sc-cmIlrE bkCYal">Continental food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/desserts-restaurants-near-me" class="sc-cmIlrE bkCYal">Desserts food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/kebab-restaurants-near-me" class="sc-cmIlrE bkCYal">Kebab food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/momos-restaurants-near-me" class="sc-cmIlrE bkCYal">Momos food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/mughlai-restaurants-near-me" class="sc-cmIlrE bkCYal">Mughlai food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/north-indian-restaurants-near-me" class="sc-cmIlrE bkCYal">North Indian food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/pizza-restaurants-near-me" class="sc-cmIlrE bkCYal">Pizza food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/rolls-restaurants-near-me" class="sc-cmIlrE bkCYal">Rolls food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/sandwich-restaurants-near-me" class="sc-cmIlrE bkCYal">Sandwich food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/seafood-restaurants-near-me" class="sc-cmIlrE bkCYal">Seafood food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/" class="sc-cmIlrE bkCYal">Shake food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/sichuan-restaurants-near-me" class="sc-cmIlrE bkCYal">Sichuan food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/south-indian-restaurants-near-me" class="sc-cmIlrE bkCYal">South Indian food near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/street-food-restaurants-near-me" class="sc-cmIlrE bkCYal">Street food near me</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ "marginBottom": "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ "fontSize": "20px" }}>Popular restaurant types near me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ "opacity":"0.7" }}>
              <a href="https://www.zomato.com/bakeries-near-me" class="sc-cmIlrE bkCYal">Bakeries near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/bars-near-me" class="sc-cmIlrE bkCYal">Bars near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/beverage-shops-near-me" class="sc-cmIlrE bkCYal">Beverage Shops near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/bhojanalya-near-me" class="sc-cmIlrE bkCYal">Bhojanalya near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/cafes-near-me" class="sc-cmIlrE bkCYal">Cafés near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/casual-dining-near-me" class="sc-cmIlrE bkCYal">Casual Dining near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/clubs-near-me" class="sc-cmIlrE bkCYal">Clubs near me</a><span class="sc-gleUXh buOgMD"></span><a href="https://www.zomato.com/cocktail-bars-near-me" class="sc-cmIlrE bkCYal">Cocktail Bars near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/dessert-parlor-near-me" class="sc-cmIlrE bkCYal">Dessert Parlors near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/dhabas-near-me" class="sc-cmIlrE bkCYal">Dhabas near me</a><span class="sc-gleUXh buOgMD"></span><a href="https://www.zomato.com/fine-dining-near-me" class="sc-cmIlrE bkCYal">Fine Dining near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/food-courts-near-me" class="sc-cmIlrE bkCYal">Food Courts near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/food-trucks-near-me" class="sc-cmIlrE bkCYal">Food Trucks near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/kiosks-near-me" class="sc-cmIlrE bkCYal">Kiosks near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/lounges-near-me" class="sc-cmIlrE bkCYal">Lounges near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/microbreweries-near-me" class="sc-cmIlrE bkCYal">Microbreweries near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/paan-shop-near-me" class="sc-cmIlrE bkCYal">Paan Shop near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/pubs-near-me" class="sc-cmIlrE bkCYal">Pubs near me</a><span class="sc-gleUXh buOgMD"></span><a href="https://www.zomato.com/quick-bites-near-me" class="sc-cmIlrE bkCYal">Quick Bites near me</a><span class="sc-gleUXh buOgMD"></span>
              <a href="https://www.zomato.com/sweet-shops-near-me" class="sc-cmIlrE bkCYal">Sweet Shops near me</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ "marginBottom": "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ "fontSize": "20px" }}>Top Restaurant Chains</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ "display": "flex", "justifyContent":"space-between", "width":"80%","opacity":"0.7"}}>
              <a href="https://www.zomato.com/kolkata/restaurants/burger-king" class="sc-dBaXSw eEXCpW">Burger King</a>
              <a href="https://www.zomato.com/kolkata/restaurants/burger-singh-big-punjabi-burgers" class="sc-dBaXSw eEXCpW">Burger Singh</a><a href="https://www.zomato.com/kolkata/restaurants/dominos" class="sc-dBaXSw eEXCpW">Domino's</a>
              <a href="https://www.zomato.com/kolkata/restaurants/haldirams" class="sc-dBaXSw eEXCpW">Haldiram's</a>
              <a href="https://www.zomato.com/kolkata/restaurants/kfc" class="sc-dBaXSw eEXCpW">KFC</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ "marginBottom": "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ "fontSize": "20px" }}>Cities We Deliver To</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              <div className=' grid gap-4 grid-cols-5 opacity-70'>
              <a href="https://www.zomato.com/ncr/" class="sc-dBaXSw eEXCpW">Delhi NCR</a>
              <a href="https://www.zomato.com/kolkata/" class="sc-dBaXSw eEXCpW">Kolkata</a>
              <a href="https://www.zomato.com/mumbai/" class="sc-dBaXSw eEXCpW">Mumbai</a>
              <a href="https://www.zomato.com/bangalore/" class="sc-dBaXSw eEXCpW">Bengaluru</a>
              <a href="https://www.zomato.com/pune/" class="sc-dBaXSw eEXCpW">Pune</a>
              <a href="https://www.zomato.com/hyderabad/" class="sc-dBaXSw eEXCpW">Hyderabad</a>
              <a href="https://www.zomato.com/chennai/" class="sc-dBaXSw eEXCpW">Chennai</a>
              <a href="https://www.zomato.com/lucknow/" class="sc-dBaXSw eEXCpW">Lucknow</a>
              <a href="https://www.zomato.com/kochi/" class="sc-dBaXSw eEXCpW">Kochi</a>
              <a href="https://www.zomato.com/jaipur/" class="sc-dBaXSw eEXCpW">Jaipur</a>
              <a href="https://www.zomato.com/ahmedabad/" class="sc-dBaXSw eEXCpW">Ahmedabad</a>
              <a href="https://www.zomato.com/chandigarh/" class="sc-dBaXSw eEXCpW">Chandigarh</a>
              <a href="https://www.zomato.com/goa/" class="sc-dBaXSw eEXCpW">Goa</a>
              <a href="https://www.zomato.com/indore/" class="sc-dBaXSw eEXCpW">Indore</a>
              <a href="https://www.zomato.com/gangtok/" class="sc-dBaXSw eEXCpW">Gangtok</a>
              <a href="https://www.zomato.com/nashik/" class="sc-dBaXSw eEXCpW">Nashik</a>
              <a href="https://www.zomato.com/ooty/" class="sc-dBaXSw eEXCpW">Ooty</a>
              <a href="https://www.zomato.com/shimla/" class="sc-dBaXSw eEXCpW">Shimla</a>
              <a href="https://www.zomato.com/ludhiana/" class="sc-dBaXSw eEXCpW">Ludhiana</a>
              <a href="https://www.zomato.com/guwahati/" class="sc-dBaXSw eEXCpW">Guwahati</a>
              <a href="https://www.zomato.com/amritsar/" class="sc-dBaXSw eEXCpW">Amritsar</a>
              <a href="https://www.zomato.com/kanpur/" class="sc-dBaXSw eEXCpW">Kanpur</a>
              <a href="https://www.zomato.com/allahabad/" class="sc-dBaXSw eEXCpW">Allahabad</a>
              <a href="https://www.zomato.com/aurangabad/" class="sc-dBaXSw eEXCpW">Aurangabad</a>
              <a href="https://www.zomato.com/bhopal/" class="sc-dBaXSw eEXCpW">Bhopal</a>
              <a href="https://www.zomato.com/ranchi/" class="sc-dBaXSw eEXCpW">Ranchi</a>
              <a href="https://www.zomato.com/visakhapatnam/" class="sc-dBaXSw eEXCpW">Visakhapatnam</a>
              <a href="https://www.zomato.com/bhubaneswar/" class="sc-dBaXSw eEXCpW">Bhubaneswar</a>
              <a href="https://www.zomato.com/coimbatore/" class="sc-dBaXSw eEXCpW">Coimbatore</a>
              <a href="https://www.zomato.com/mangalore/" class="sc-dBaXSw eEXCpW">Mangalore</a>
              <a href="https://www.zomato.com/vadodara/" class="sc-dBaXSw eEXCpW">Vadodara</a>
              <a href="https://www.zomato.com/nagpur/" class="sc-dBaXSw eEXCpW">Nagpur</a>
              <a href="https://www.zomato.com/agra/" class="sc-dBaXSw eEXCpW">Agra</a>
              <a href="https://www.zomato.com/dehradun/" class="sc-dBaXSw eEXCpW">Dehradun</a>
              <a href="https://www.zomato.com/mysore/" class="sc-dBaXSw eEXCpW">Mysore</a>
              <a href="https://www.zomato.com/puducherry/" class="sc-dBaXSw eEXCpW">Puducherry</a>
              <a href="https://www.zomato.com/surat/" class="sc-dBaXSw eEXCpW">Surat</a>
              <a href="https://www.zomato.com/varanasi/" class="sc-dBaXSw eEXCpW">Varanasi</a>
              <a href="https://www.zomato.com/patna/" class="sc-dBaXSw eEXCpW">Patna</a>
              <a href="https://www.zomato.com/udaipur/" class="sc-dBaXSw eEXCpW">Udaipur</a>
              <a href="https://www.zomato.com/srinagar/" class="sc-dBaXSw eEXCpW">Srinagar</a>
              <a href="https://www.zomato.com/khajuraho/" class="sc-dBaXSw eEXCpW">Khajuraho</a>
              <a href="https://www.zomato.com/neemrana/" class="sc-dBaXSw eEXCpW">Neemrana</a>
              <a href="https://www.zomato.com/cuttack/" class="sc-dBaXSw eEXCpW">Cuttack</a>
              <a href="https://www.zomato.com/trivandrum/" class="sc-dBaXSw eEXCpW">Trivandrum</a>
              <a href="https://www.zomato.com/haridwar/" class="sc-dBaXSw eEXCpW">Haridwar</a>
              <a href="https://www.zomato.com/leh/" class="sc-dBaXSw eEXCpW">Leh</a>
              <a href="https://www.zomato.com/pushkar/" class="sc-dBaXSw eEXCpW">Pushkar</a>
              <a href="https://www.zomato.com/rajkot/" class="sc-dBaXSw eEXCpW">Rajkot</a>
              <a href="https://www.zomato.com/madurai/" class="sc-dBaXSw eEXCpW">Madurai</a>
              <a href="https://www.zomato.com/kozhikode/" class="sc-dBaXSw eEXCpW">Kozhikode</a>
              <a href="https://www.zomato.com/alappuzha/" class="sc-dBaXSw eEXCpW">Alappuzha</a>
              <a href="https://www.zomato.com/thrissur/" class="sc-dBaXSw eEXCpW">Thrissur</a>
              <a href="https://www.zomato.com/manipal/" class="sc-dBaXSw eEXCpW">Manipal</a>
              <a href="https://www.zomato.com/vijayawada/" class="sc-dBaXSw eEXCpW">Vijayawada</a>
              <a href="https://www.zomato.com/jodhpur/" class="sc-dBaXSw eEXCpW">Jodhpur</a>
              <a href="https://www.zomato.com/kota/" class="sc-dBaXSw eEXCpW">Kota</a>
              <a href="https://www.zomato.com/ajmer/" class="sc-dBaXSw eEXCpW">Ajmer</a>
              <a href="https://www.zomato.com/mussoorie/" class="sc-dBaXSw eEXCpW">Mussoorie</a>
              <a href="https://www.zomato.com/rishikesh/" class="sc-dBaXSw eEXCpW">Rishikesh</a>
              <a href="https://www.zomato.com/jalandhar/" class="sc-dBaXSw eEXCpW">Jalandhar</a>
              <a href="https://www.zomato.com/jammu/" class="sc-dBaXSw eEXCpW">Jammu</a>
              <a href="https://www.zomato.com/manali/" class="sc-dBaXSw eEXCpW">Manali</a>
              <a href="https://www.zomato.com/dharamshala/" class="sc-dBaXSw eEXCpW">Dharamshala</a>
                <a href="https://www.zomato.com/delivery-cities" className="sc-cgHJcJ cAViu opacity-[100%] text-black font-medium underline">See more</a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
          </div>
    </div>
  )
}

export default Explore
