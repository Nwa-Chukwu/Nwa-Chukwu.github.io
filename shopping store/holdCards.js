let shop = document.getElementById("shop-content");

let shopItemsData = [{
  id: "qwwe",
  img: "images/camra.avif",
  desc: "Much as the IS system in a Canon lens uses special movable lens elements, it can move to compensate for camera movement.",
  title: "Camera",
  price: 3375000
},
{
  id: "qwwghj",
  img: "images/copter-drone.avif",
  desc: "A quadcopter, also called quadrocopter, or quadrotor is a type of helicopter or multicopter that has four rotors. A DJI Phantom quadcopter drone in flight",
  title: "Copter Drone",
  price: 7200000
},
{
  id: "qwwjhg",
  img: "images/digital-piano.avif",
  desc: "A sound box is an open chamber in the body of a musical instrument which modifies the sound of the instrument.",
  title: "Sound Box",
  price: 2500000
},
{
  id: "qwwnny",
  img: "images/game-controller.avif",
  desc: "A gamepad is a type of video game controller held in two hands, are used to provide input. They are typically the main input device for video game consoles.",
  title: "Controller",
  price: 300000
},
{
  id: "qwwnny",
  img: "images/i-pod.avif",
  desc: " Portability: If you're always on the move, earbuds could be more convenient. Noise isolation: Consider the level of ambient noise in your regular listening environment",
  title: "Earbud",
  price: 100000
},
{
  id: "qwwnny",
  img: "images/i-watch.avif",
  desc: "Apple Watch is the ultimate device for a healthy life. Available in three models: Apple Watch Ultra 2, Apple Watch Series 9, and Apple Watch SE.",
  title: "iWatch",
  price: 270000
},
{
  id: "qwwnny",
  img: "images/keyboard.avif",
  desc: "A computer keyboard is an input device used to enter characters and functions into the computer system by pressing buttons, or keys.",
  title: "Keyboard",
  price: 45000
},
{
  id: "qwwnny",
  img: "images/telephone.avif",
  desc: "a system for transmitting voices over a distance using wire or radio, by converting acoustic vibrations to electrical signals.",
  title: "Telephone",
  price: 1575000
},
{
  id: "ffjfh",
  img: "images/9.avif",
  desc: "Virtual-Games works since year 2000, as a company specialized in boosting events, seeking with our simulators, similar to reality in everything,",
  title: "Virtual",
  price: 675445.786
},
{
  id: "fdfghg",
  img: "images/10.avif",
  desc: "A laptop computer or notebook computer, also known as a laptop or notebook for short, is a small, portable personal computer (PC).",
  title: "Laptop",
  price: 456879.567
},
{
  id: "rffvcde",
  img: "images/11.avif",
  desc: "Wireless headphones let you enjoy music and movies more freely; ideal for home cinemas. Noise Cancelling. Identifies and filters out distracting environmental ",
  title: "Headphone",
  price: 26000.78
},
{
  id: "plmmko",
  img: "images/13.avif",
  desc: "Industry leading innovators, Alienware, manufactures the best gaming laptops & desktops that provide users with immersive and exhilarating gaming.",
  title: "Alienware",
  price: 5000000
},
{
  id: "yttrfg",
  img: "images/12.avif",
  desc: "KMAG USB C Wireless Lavalier Microphones for iPhone 15 Android Phone Laptop Computer Small Wireless Microphone for Video Recording Vlogging TikTok and YouTube",
  title: "Microphone",
  price: 342678.56
},
{
  id: "huyfghhg",
  img: "images/14.avif",
  desc: "to be alertly on the lookout, look attentively, or observe, as to see what comes, is done, or happens: to watch while an experiment is performed.",
  title: "Watch",
  price: 765000
},
{
  id: "dfgttth",
  img: "images/15.avif",
  desc: "Get a new iMac all-in-one computer from only $108.25 per month. Select a model or customise your own. Buy now at apple.com.",
  title: "iMac",
  price: 10345643
},
{
  id: "pojvcxfg",
  img: "images/16.avif",
  desc: "Industry leading innovators, Alienware, manufactures the best gaming laptops & desktops that provide users with immersive and exhilarating gaming",
  title: "Alienware-curve",
  price: 6700000
}]

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x)=>{
    let {id, img, desc, title, price} = x;
    return(
      `
      <div id=product-id-${id} class="product-box">
        <img src=${img} alt="" class="product-img">
        <h6 class="description">${desc}</h6>
        <h2 class="product-title">${title}</h2>
        <span class="price">₦${price}</span>
         <i class="fa-solid fa-cart-shopping add-cart"></i>
      </div>
      `
    );
  }).join(""));
};

generateShop();
