import "../Contacto/Contacto.css"

const Contacto = () => {
    return(
        <>
        <section class="contact-me" id="contact">
            <h3>Contactame</h3>
            <h4><span>Hablemos sobre</span> Tus Ideas</h4>

            <div class="contactdivs">
                <div class="contleft">
                    <div class="container">
                        <i class="fa-regular fa-map"></i>
                        <div class="barra"></div>                  
                        <div class="datos">
                            <h4>Dirección</h4><h3>Junin 1453, S.M. de Tucumán</h3>
                        </div>
                    </div>

                    <div class="container">
                        <i class="fa-regular fa-user"></i><div class="barra"></div>                    
                        <div class="datos">
                            <h4>Freelance</h4><h3>Disponible</h3>
                        </div>
                    </div>
                    
                    <div class="container">
                        <i class="fa-regular fa-envelope"></i><div class="barra"></div>                   
                        <div class="datos">
                            <h4>Email</h4><h3>leandrorojano@gmail.com</h3>
                        </div>
                    </div>

                    <div class="container">
                        <i class="fa-solid fa-mobile-screen"></i><div class="barra"></div>                    
                        <div class="datos">
                            <h4>Teléfono</h4><h3>+5493813150489</h3>
                        </div>
                    </div>
                </div>
                <div class="contright">
                    <form action="https://formsubmit.co/leandrorojano2001@hotmail.com" method="POST">
                        <div class="top-campo">
                            <div class="campo">
                                <input type="text" id="name" name="name" class="name" placeholder="Tu Nombre" required></input>
                            
                                <div class="form-icon"><i class="fa-regular fa-user"></i></div>
                            </div>
                            
                            <div class="campo">
                                <input type="email" name="email" id="email" class="mail" placeholder="Tu correo" required></input>
                                <div class="form-icon"><i class="fa-regular fa-envelope"></i></div><br></br>
                            </div>
                        </div>
                        
                        <div class="campo">
                            <input type="text" name="subject" id="subject" class="subject" placeholder="Asunto" required></input>
                            <div class="form-icon"><i class="fa-solid fa-book-bookmark"></i></div><br></br>
                        </div>
                        
                        <div class="campo">
                            <textarea id="coments" class="msg" name="coments" rows="4" cols="50" placeholder="Tu Mensaje"></textarea><div class="form-icon"><i class="fa-regular fa-comment-dots"></i></div><br></br>
                        </div>
                        
                        <input type="submit" class="gradient-button" value="Enviar Mensaje"></input>

                        <input type="hidden" name="_next" value="https://leoito88.github.io/portfolio/"></input>

                        <input type="hidden" name="_captcha" value="false"></input>

                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contacto