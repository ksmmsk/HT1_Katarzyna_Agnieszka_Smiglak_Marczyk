class DeleteJobTitle {
    get btnConfirmDel() {
        return $('button.oxd-button--label-danger.orangehrm-button-margin');
    }

    async confirmDeletion(){
        await this.btnConfirmDel.click();
    }
}

module.exports = new DeleteJobTitle();