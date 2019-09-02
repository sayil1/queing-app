


var app = new Vue({
    el: '#app',
    data: {
        queue: [],
        index: 10000,
        counter: -1,
        Error: "false",
        name: "",
        initials: "SH",
        date: new Date(),
        newqueue: "",

    },
    methods: {
        generateNumber() {
            let newindex = this.index++,
                month = this.date.getMonth(),
                day = this.date.getUTCDate()
            if (this.name === "") {
                // document.getElementById("noName").innerHTML = "Please kindly enter reciepients names"
                this.Error = "true"
                console.log("not seen")
                document.getElementById("modal").innerHTML = `Please enter a name`;
            } else {
                this.Error = "false"
                let NUmber = { id: `${this.initials}-${month + 1}-${day}-${newindex}`, name: this.name }
                this.queue.push(NUmber)
                console.log(NUmber, "this is the new number")

                document.getElementById("modal").innerHTML = `${NUmber.id}${NUmber.name}`;
                localStorage.setItem("queue", JSON.stringify(this.queue));

            }
        },
        tabledisplay() {
            var Data = localStorage.getItem("queue");
            let tableData = JSON.parse(Data)
            console.log(tableData)
            tableData.shift()
            localStorage.setItem("queue", JSON.stringify(tableData))
        },
        display() {
            this.counter++;
            var Data = localStorage.getItem("queue");
            this.newqueue = JSON.parse(Data)
            console.log(this.newqueue[this.counter])
            if (this.counter >= this.newqueue.length) {
                this.counter = this.newqueue.length - 1;
                console.log("queue is empty")
                document.getElementById("display").innerHTML = "Queue is empty"
            } else {
                console.log(this.newqueue[this.counter].id)
                document.getElementById("display").innerHTML = this.newqueue[this.counter-1].name + this.newqueue[this.counter].id
                // localStorage.setItem("queue", JSON.stringify(this.newqueue))
            }
            this.tabledisplay()

        },



    }
})
