class DeleteJobTitle {
    get btnConfirmDel() {
        return $('button=Yes, Delete')
    }

    async confirmDeletion(){
        await this.btnConfirmDel.click();
    }
}

module.exports = new DeleteJobTitle();