
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/xdornvkg",
    title: "Richiesta generica",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "esempio@email.com"
      },
      {
        type: "textarea",
        label: "Scrivi un messsaggio:",
        name: "message",
        placeholder: "Di cosa hai bisogno?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });

  const load = (e) => {
  let url = URL.createObjectURL(e.files[0])
  let video = document.querySelector("#id");
  video.setAttribute("src", url)
  video.play();
}
  
/** AUTO */
