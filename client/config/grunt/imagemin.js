module.exports = function(grunt, options){
  return {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.app %>/assets/img',
        src: '{,*/}*.{png,jpg,jpeg,gif}',
        dest: '<%= yeoman.dist %>/assets/img'
      }]
    }
  };
};
