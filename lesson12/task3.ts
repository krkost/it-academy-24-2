// 3. Write type annotations for the class
export class ObjectManipulator {
    protected obj: { [key: string]: any };

    constructor(obj: { [key: string]: any }) {
        this.obj = obj;
    }

    public set(key: string, value: any): ObjectManipulator {
        return new ObjectManipulator({ ...this.obj, [key]: value });
    }

    public get(key: string): any {
        return this.obj[key];
    }

    public delete(key: string): ObjectManipulator {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): { [key: string]: any } {
        return this.obj;
    }
}