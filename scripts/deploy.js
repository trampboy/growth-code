/**
 * Created by JingHongGang on 2022/12/2.
 */
const { NodeSSH } = require("node-ssh");
const config = require("./config");

const version = process.argv.slice(2);

function printRet(ret) {
  console.info("ret stdout:", ret.stdout, "stderr:", ret.stderr);
}
if (!version) {
  throw new Error(`请上传有效的版本号:${version}`);
}

const ssh = new NodeSSH();
ssh
  .connect({
    host: config.host,
    username: config.username,
    password: config.password,
  })
  .then(async () => {
    let ret = await ssh.execCommand(
      `wget https://github.com/trampboy/growth-code/archive/refs/tags/v${version}.tar.gz`,
      { cwd: config.app_path }
    );
    printRet(ret);
    ret = await ssh.execCommand(`tar -xvf v${version}.tar.gz`, {
      cwd: config.app_path,
    });
    printRet(ret);
    ret = await ssh.execCommand(`rm -f growth-studio`, {
      cwd: config.app_path,
    });
    printRet(ret);
    ret = await ssh.execCommand(`ln -s growth-code-${version} growth-studio`, {
      cwd: config.app_path,
    });
    printRet(ret);
    ret = await ssh.execCommand(`npm install`, { cwd: "/data/growth-studio" });
    printRet(ret);
    ret = await ssh.execCommand(`pm2 reload process.json`, {
      cwd: "/data/growth-studio",
    });
    printRet(ret);
    return process.exit(0);
  });
