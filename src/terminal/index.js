import { spawn } from 'child_process'

function getTerminalOutput(command){
        const ls = spawn(...command);
        return new Promise((resolve,reject)=>{
             ls.stdout.on("data", data => {
                resolve(`stdout : ${data}`);
            });
            
             ls.stderr.on("data", data => {
                reject(`stderr: ${data}`);
            });
            
             ls.on('error', (error) => {
                reject(`error: ${error.message}`);
            });
            
             ls.on("close", code => {
                console.log(`child process exited with code ${code}`);
            });
        });
    }
    
export default getTerminalOutput;

