let stateContent;

if (localStorage["data"]){stateContent = JSON.parse(localStorage.getItem('data'))}
else{
 stateContent =  
({
  boxes: []});}
  export default stateContent;
