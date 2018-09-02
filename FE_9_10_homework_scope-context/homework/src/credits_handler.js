let zero = 0, taxe = 0.95, put = {}, date, newDate, take = {}
const card3 = {
    key: 3,
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    getCardOptions: function () {
        console.log(`key:` + this.key)
        console.log(`balance:` + this.balance)
        console.log(`transactionLimit:` + this.transactionLimit)
        console.log(`historyLogs:` + this.historyLogs)
    },
    putCredits: function (add) {
        this.balance += add
        _date()
        put = {operationType: 'Received credits', credits: add, operationTime: newDate}
        this.historyLogs.push(put)
        console.log(put);
    },
    takeCredits: function (sub) {
        if (this.balance - sub >= zero) {
            this.balance -= sub
            _date()
            take = {operationType: 'Withdrawal of credits', credits: sub, operationTime: newDate}
            this.historyLogs.push(take)
        } else {
            alert(`Credit is bigger than your balance`)
        }
    },
    setTransactionLimit: function (limit) {
        this.transactionLimit = limit
    },
    transferCredits: function (sum, card) {
        if (this.balance >= sum && sum < this.transactionLimit) {
            card.balance += sum * taxe
            this.balance -= sum
        } else {
            alert(`WARNING!!! Select less amount credit`)
        }
    }
}


function _date() {
    date = new Date()
    newDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ', '
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}