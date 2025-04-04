https://github.com/user-attachments/assets/982d79dc-12ad-4dbc-8e9b-0199f52a8b20



###

<h1 align="left">Box Chroma - Changing Colors</h1>

###

<p align="left">This is a React.js-based 3x3 interactive matrix, where each box changes to green when clicked and displays its click order inside. Once all 9 boxes are clicked, an animated sequence turns them orange in the order they were clicked. The project demonstrates React state management, event handling, and animations for a dynamic user experience. Built with React.js and Tailwind CSS, this project is lightweight and easy to expand. 🚀</p>

###

## 🔗 Live Link



###

<p align="left">https://box-chroma-website-by-shahbaz.netlify.app/</p>

###




## ✨ Features:

###

1. **Interactive 3x3 Grid**

   - Click to change box colors and track the order.

2. **Final Click Animation**

   - The 9th click turns all boxes orange in sequence.

3. **Gradient Text Styling**

   - Eye-catching orange-to-green gradient title.

4. **Smooth & Responsive UI**

   - Built with React.js & Tailwind CSS for a clean experience.

5. **Fully Responsive Design**

   - Works seamlessly on desktops, tablets, and mobile devices.



###

## 🛠 Technology Used

###

 <div align="left">
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <!-- <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" alt="firebase logo"  /> -->
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <!-- <img width="12" />
   <img src="https://cdn.simpleicons.org/nodedotjs/339933" height="40" alt="nodejs logo"  /> -->
  <!-- <img width="12" />
     <img src="http://skillicons.dev/icons?i=express" height="40" alt="express logo"/> -->
     <!-- <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="mongodb logo"  /> -->
  <!-- <img width="12" />
    <img src="https://avatars.githubusercontent.com/u/856813?s=200&v=4" height="40" alt="stripe logo logo"  /> -->
</div>


###
###

## 💥 Dependencies:

<!-- <h3 align="left"></h3> -->

###

<h3 align="left">"react": "^19.0.0",<br>    "react-dom": "^19.0.0",<br>    "react-router-dom": "^7.4.1"</h3>

###

###

## 🔧 Installation Guidline:

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Front End</span>
  <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/71-digital-sign-client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Create a firebase project and a file named .env.local in your root folder & use your firebase credintials as follows:

```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_api_id
VITE_IMAGE_HOSTING_KEY=your_image_hosting_ke
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

5. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Backend</span>
  <img src="https://cdn-icons-png.flaticon.com/128/16318/16318927.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

###

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/71-digital-sign-server.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Put your Mongodb uri in the constant named uri.
5. Create a MongoDB user by keeping username and password collected & create a .env file in the root directory and put the following code:

```bash
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_Password
ACCESS_TOKEN_SECRET=token_secret_for_jwt_token
PAYMENT_SECRET_KEY=stripe_secret_key
```

6. Put the following code instead of <db_username>:

```bash
${process.env.DB_USER}
```

7. Put the following code instead of <db_password>:

```bash
${process.env.DB_PASS}
```

8. Run the following command and open the website locally on port 5000:

```bash
npm start
```



###
