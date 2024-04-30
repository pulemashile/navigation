//import logo from "../images/logo.svg"
const nav = document.getElementById("nav");

let showFeatures=true

const navHTML = `
    <div>
        <div>
        <img src="../images/logo.svg"/>
        
            <ul>
                <li
                >Features<img src="../images/icon-arrow-down.svg"/></li>
                <li><a href="company.html">company</a><img src="../images/icon-arrow-down.svg"/></li>
                <li><a href="careers.html">careers</a></li>
                <li><a href="about.html">about</a></li>
            </ul>


        </div>
        <div>
            <ul>
                <li><a href="login.html">login</a></li>
    
            <ul>
            <button type="button">register</button> 
        </div>
    </div>
    <div class={showFeatures ?  "showfeatures"   : "hideFeatures"}>
        <ul>

            <li>todo list</li>
            <li>calendar</li>
            <li>reminders</li>
            <li>planning</li>

        </ul>
    <div>
`;

nav.innerHTML=navHTML
