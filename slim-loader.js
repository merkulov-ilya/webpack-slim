module.exports = function (source) {
  // console.log(this);
  // console.log(source);

  // this.addDependency(source);

  return require('child_process').execSync('slimrb -s -p', { input: source });

  // const callback = this.async();

  // const exec = require('child_process').exec;
  // exec('slimrb -s -p', { input: source }, function (error, stdout, stderr){
  //     console.log(stdout);
  //     callback(null, stdout);
  // });

  // return `export default ${ JSON.stringify(source) }`;
  // return source;
}
