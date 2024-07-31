import "../Portfolio/Portfolio.css"
import { Box, Flex } from "@chakra-ui/react"

const Portfolio = () => {
    return(
        <>
        <section class="portfolio" id="portfolio">
            <h3>Portfolio</h3>
            <h4><span>Mis</span> Proyectos</h4>

            <input type="radio" id="all" name="button" checked></input>
            <input type="radio" id="angular" name="button"></input>
            <input type="radio" id="react" name="button"></input>
            <input type="radio" id="figma" name="button"></input>
            <input type="radio" id="js" name="button"></input>
            <input type="radio" id="css" name="button"></input>

            <label class="tag all" for="all">Todo</label>
            <label class="tag tag1" for="angular">Angular</label>
            <label class="tag tag2" for="react">React</label>
            <label class="tag tag3" for="figma">Figma</label>
            <label class="tag tag4" for="js">JavaScript</label>
            <label class="tag tag5" for="css">CSS</label>
            <br></br>

        <div class="projects">
            
            <div class="react">
                <div class="card">
                    <img src="img/Ecommerce.png" alt=""></img>
                    <h2>React</h2>
                    <h4>E-commerce</h4>
                    <h6>E-commerce desarrollado en React usando Fake API en el cual se puede ver en detalle cada producto, cambiar por páginas y visualizar los carritos cargados.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://githubbox.com/leoito88/ecommerce-react"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/ecommerce-react"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="angular">
                <div class="card">
                    <img src="img/tripmanager.png" alt=""></img>
                    <h2>Angular</h2>
                    <h4>Administrador de Viajes</h4>
                    <h6>App realizada en Angular en el cual se puede crear, modificar o borrar datos de pasajeros, colectivos y destinos, de una base de datos, para una empresa de viajes.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://demo-viajes.delphos.ar/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/trip-manager-angular"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="css">
                <div class="card">
                    <img src="img/tesla.png" alt=""></img>
                    <h2>CSS</h2>
                    <h4>Réplica diseño Tesla Web</h4>
                    <h6>Página web de Tesla Motors replicada en CSS y HTML</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://leoito88.github.io/tesla-only-css/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/tesla-only-css"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="js">
                <div class="card">
                    <img src="img/calc.png" alt=""></img>
                    <h2>JavaScript</h2>
                    <h4>Calculadora</h4>
                    <h6>Calculadora funcional programada con JavaScript elaborada con el diseño de Iphone, que también está diseñado en CSS. Dispone la funcionalidad de historial.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://leoito88.github.io/calc-iphone-js/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/calc-iphone-js"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="figma">
                <div class="card">
                    <img src="img/fig.png" alt=""></img>
                    <h2>Figma</h2>
                    <h4>Prototipado en Figma</h4>
                    <h6>Página web Hero de la marca de motocicletas KTM prototipada para Escritorio y en Celular para llevarla luego al desarrollo en código.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://www.figma.com/proto/is5O7VuLlPOnPWOY4sw068/KTM-WEB-PAGE?node-id=1-2&t=74wd3Vku8TXqBU8d-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="js">
                <div class="card">
                    <img src="img/musicplayer.png" alt=""></img>
                    <h2>JavaScript</h2>
                    <h4>Reproductor de Música</h4>
                    <h6>Reproductor realizado en JavaScript, al cual se le agregó portada, tiempo total de la canción y barra de progreso clickeable.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://leoito88.github.io/musicPlayer/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/musicPlayer"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="js">
                <div class="card">
                    <img src="img/library.png" alt=""></img>
                    <h2>JavaScript</h2>
                    <h4>Gestor de Biblioteca</h4>
                    <h6>Gestor de Biblioteca realizado en JavaScript, el cual muestra una lista de libros de una base de datos, y se puede buscar libros por autor. También se puede agregar libros y sus datos</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://leoito88.github.io/library-manager/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/library-manager"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="css">
                <div class="card">
                    <img src="img/gallery.png" alt=""></img>
                    <h2>CSS</h2>
                    <h4>Desarrollo diseño en CSS</h4>
                    <h6>Galería de imágenes replicada y desarrollada íntegramente en CSS. Se requería que quede idéntico a un diseño presentado.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://leoito88.github.io/photo-gallery/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/photo-gallery"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="css">
                <div class="card">
                    <img src="img/bank.png" alt=""></img>
                    <h2>CSS</h2>
                    <h4>Desarrollo diseño en CSS</h4>
                    <h6>Diseño de un formulario de banco replicado y desarrollado íntegramente en CSS. Se utilizó Bootstrap. Se requería que quede idéntico a un diseño presentado.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://leoito88.github.io/image-based-bank-form/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/image-based-bank-form"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="css">
                <div class="card">
                    <img src="img/uicomp.png" alt=""></img>
                    <h2>CSS</h2>
                    <h4>Desarrollo diseño en CSS</h4>
                    <h6>Componentes de UI replicados y desarrollados íntegramente en CSS. Se requería que los componentes queden idénticos a un diseño presentado.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://leoito88.github.io/masonry-grid-boxes/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/masonry-grid-boxes"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="css">
                <div class="card">
                    <img src="img/login.png" alt=""></img>
                    <h2>CSS</h2>
                    <h4>Desarrollo diseño en CSS</h4>
                    <h6>Login replicado y desarrollado íntegramente en CSS. Se requería que el Login quede idéntico a un diseño presentado.</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://leoito88.github.io/image-based-web-project-login/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                            <a href="https://github.com/leoito88/image-based-web-project-login"><h5>Ver Código <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="js">
                <div class="card">
                    <img src="img/leandru.png" alt=""></img>
                    <h2>JavaScript - Macromedia Flash</h2>
                    <h4>Desarrollo página Web en Flash</h4>
                    <h6>Página propia hecha en 2004 con Macromedia Flash y JavaScript. Para correcto funcionamiento ver en escritorio (sólo pagina principal)</h6>
                    <div class="footcard">
                        <div class="links">
                            <a href="https://web.archive.org/web/20041126120636/http://www.leandru.com.ar/"><h5>Ver Proyecto <i class="fa-solid fa-arrow-right"></i></h5></a>
                        </div>
                    <div class="dots">
                        <div class="nodott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="nodott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div><div class="dott"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
        </>
    )
}

export default Portfolio