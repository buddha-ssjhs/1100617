namespace Serial_IT{

    export function pInt(str: string): number {
        for (let i = 0; i < 2; i ++) {
            if (!(parseInt(str.charAt(i), 16))){
                return -1
            }
        }
        return parseInt(str, 16)
    }

    export function setMicro(func: number, para: number): void {
        switch (func)
        {
            case 1:
                if(para > 127){
                    Matrix.motor(M_PORT.M1, para-256);
                }
                else{
                    Matrix.motor(M_PORT.M1, para);
                }
                break;
        }
  
    }

    // export function getMicro(func: number): string {

    // }
}