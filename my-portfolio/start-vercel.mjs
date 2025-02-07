import { spawn } from 'child_process';
spawn('npx', ['vercel', 'dev'], { 
    stdio: 'inherit',
    shell: true,
    windowsHide: true
});