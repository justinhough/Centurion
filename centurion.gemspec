#encoding: utf-8

require "json"
package = JSON.parse(File.read("package.json"))

Gem::Specification.new do |s|
  s.name        = package["name"]
  s.version     = package["version"]
  s.summary     = "Centurion is a framework built with Sass"
  s.description = package["description"]
  s.authors     = package["author"]["name"]
  s.email       = package["author"]["email"]
  s.files       = ["lib/centurion.rb"]
  s.homepage    = package["homepage"]
  s.license     = package["license"]

  s.add_dependency "sass", "~> 3.4"
end