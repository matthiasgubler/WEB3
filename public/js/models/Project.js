class Project {
    constructor(title) {
        this.id = 0;
        this.client_id = create_UUID();
        this.created_at = new Date();
        this.updated_at = this.created_at;
        this.title = title;
        this.active = true;
        this.dirty = true;
    }

    toJSON() {
        return {
            id: this.id,
            client_id: this.client_id,
            created_at: this.created_at,
            updated_at: this.updated_at,
            title: this.title,
            active: this.active
        };
    };


}