# find the 'lib' directory and also the stylesheets directory
base_directory  = File.expand_path(File.join(File.dirname(__FILE__), '..', 'lib'))
stylesheets_path = File.join(base_directory, 'sass')

# if using compass, register as a compass extension
if (defined? Compass)
  Compass::Frameworks.register('centurion', :stylesheets_directory => stylesheets_path)
else
  # if not, register on the Sass path via the environment.
  if ENV.has_key?("SASS_PATH")
    ENV["SASS_PATH"] = ENV["SASS_PATH"] + File::PATH_SEPARATOR + stylesheets_path
  else
    ENV["SASS_PATH"] = stylesheets_path
  end
end

