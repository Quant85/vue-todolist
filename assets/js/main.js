/* Istruzioni:
Create una todo list usando VueJS.
Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
Se non sapere che fare, di seguito trovate uno screenshot.
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri. */

//La nostra todo list avrá alcune tasks di default predefinite


let taskList = new Vue({
  el:'#todoapp',
  data:{
    images:{
      logo1:"https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_960_720.png",
      logo2:"https://www.boolean.careers/images/misc/logo.png",
    },
    time: '',
    tasks: [
      {
        taskName: "Ricordati di pushare1",
        editable: true,
        important: false,
        completionStatus: false,
        trash: false,
      },
      {
        taskName: "Ricordati di pushare2",
        editable: true,
        important: false,
        completionStatus: false,
        trash: false,
      },
      {
        taskName: "Cambia messaggio di tanto in tanto",
        editable: true,
        important: false,
        completionStatus: false,
        trash: false,
      },
      {
        taskName: "Commenta il codice",
        editable: true,
        important: false,
        completionStatus: false,
        trash: false,
      },
    ],
    newTask: "",
    completedTasks:[],
    trashTasks:[],
  },
  methods: {
    updateTime() {
      this.time = new Date().toLocaleTimeString();
    },
    addTask: function(){
      //con il condizionela evito stringhe vuote - si potrebbe provare ad attivare la condizione di error del tag input
      if (this.newTask.length >= 4) {
        this.tasks.push({
          taskName: this.newTask,
          editable: true,
          important: false,
          completionStatus: false,
          trash: false,
        });
      }
      this.newTask = ''; //elimino il contenuto dell'input dopo il submit/invio dati
    },
    importantTask(index) {
      if (this.tasks[index].important) {
        this.tasks[index].important = false;
        this.tasks.sort((x,y) => y.important - x.important);//ordine decrescente
        
      } else if (!this.tasks[index].important){
        this.tasks[index].important = true;
        this.tasks.sort((x,y) => y.important - x.important);//ordine decrescente mi garantisce che gli iSimportan siano sempre più in alto de notImportant
      }
    },
    clearTask(index) {
      this.tasks.splice(index,1);
    },
    editableClick(index) {
      if (this.tasks[index].editable) {
        this.tasks[index].editable = false;
      } else if (!this.tasks[index].editable) {
        this.tasks[index].editable = true;
      } //questo metodo mi consente di attivare e disattivare la proprieta di accesso alla casella di testo della textarea variando il booleano da true a false di readonly
    },
    completionTask(index) {
      if (!this.tasks[index].completionStatus) {
        this.tasks[index].completionStatus = true;
        this.completedTasks.push(this.tasks[index]);
        this.clearTask(index);
      }
    },
    clearCompletedTask(index) {
      this.completedTasks.splice(index,1);//splice mi permette di rimuovere, in questo caso, 1 elemento, cioè se stesso partendo dall'index cioè dove clicco
    },
    editablecompletedClick(index) {
      if (this.completedTasks[index].editable) {
        this.completedTasks[index].editable = false;
      } else if (!this.completedTasks[index].editable) {
        this.completedTasks[index].editable = true;
      } //questo metodo mi consente di attivare e disattivare la proprieta di accesso alla casella di testo della textarea variando il booleano da true a false di readonly
    },
    reloadTask(index) {
      if (this.completedTasks[index].completionStatus) {
        this.completedTasks[index].completionStatus = false;
        this.tasks.push(this.completedTasks[index]);
        this.clearCompletedTask(index);
        } // do la possibilità di modificare una task completata e reintegrarla nelle task da completare
    },
    shiftTaskTrash(index){
      if (!this.tasks[index].trash) {
        this.tasks[index].trash = true;
        this.trashTasks.push(this.tasks[index]);
        this.clearTask(index);
      }
    },
    reloadTrashTask(index) {
      if (this.trashTasks[index].trash) {
        this.trashTasks[index].trash = false;
        this.tasks.push(this.trashTasks[index]);
        this.clearTaskTrash(index);
        } // do la possibilità di modificare una task completata e reintegrarla nelle task da completare
    },
    clearTaskTrash(index){
      this.trashTasks.splice(index,1);
    },
    clertTrash(){
      this.trashTasks = [];
    },
    clertCompletedList(){
      this.completedTasks = [];
    },
  },
});
setInterval(taskList.updateTime, 1000);

