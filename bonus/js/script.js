// Descrizione:
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

var app = new Vue(
    {
        el: '#root',
        data: {

            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],

            currentActiveElement: 0,

        },

        methods: {
            // Funzione che mostra l'elemento dopo
            showNextElement() {
                if (this.currentActiveElement < this.slides.length -1 ) {
                    this.currentActiveElement++;
                
                }else{
                    this.currentActiveElement = 0;
                }


            },
            // Funzione che mostra l'elemento precendente
            showPrevElement() {
                if(this.currentActiveElement > 0) {
                    this.currentActiveElement--;
                    
                }else{
                    this.currentActiveElement = 0;

                }

            },

            // Funzione al click che mostra l'immagine del thumb cliccato  
            thumbClick(elementIndex) {
                this.currentActiveElement = elementIndex;

            },

            // Incremento l'indice dei thumb in corrispondeza della lunghezza del array 
            // Una volta arrivato alla lunghezza del array lo faccio ripartire da capo
            increaseCounter() {
                if (this.currentActiveElement < this.slides.length -1) {
                    this.currentActiveElement++; 
                    
                }else{
                    this.currentActiveElement = 0

                }
                
            },

            // Setto a 3s ogni thumb
            startAutoPlay(){
                setInterval(this.increaseCounter, 3000)
            }


        },

        // Parte l'autoplay ad inizio pagina 
        mounted() {
            this.startAutoPlay()

        }
       
    }
)