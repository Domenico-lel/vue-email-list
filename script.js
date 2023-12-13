const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [] // Array per immagazzinare le email
        };
    },
    methods: {
        fetchEmails() {
            const numEmails = 10;
            const apiUrl = `https://jsonplaceholder.typicode.com/comments?_limit= ${numEmails}`;

            // Effettua la richiesta API usando axios
            axios.get(apiUrl)
                .then(response => {
                    // Aggiorna l'array delle email con i dati ottenuti
                    this.emails = response.data.map(item => item.email);
                })
                .catch(error => {
                    console.error('Errore nella richiesta API:', error);
                });
        }
    },
    mounted() {
        this.fetchEmails(); // Chiama la funzione fetchEmails quando l'app viene montata
    }
}).mount('#app');