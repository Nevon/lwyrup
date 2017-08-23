LWYRUP
######

# 🚨 WIP: This absolutely does not work at the moment 🚨

Check if your project is in conflict with the licenses of your dependencies.

While it's exciting to see that open-source is becoming the new normal, and the open-source community a place of innovation and creativity, the new breed of open-source developers are in my opinion often ignorant when it comes to software licensing. Developers that were active in open-source when it was still a new and strange thing are often appreciative of licensing as a tool to protect and preserve open-source - a belief that is slowly eroding.

In an effort to educate and help developers more easily understand software licensing, this project aims to very easily tell you if you are in conflict with your dependencies ([with some caveats](#Notes)).

As an added bonus, it also highlights the absurd complexity of software licensing, where a single dependency can introduce 20 different licenses due to transitive dependencies.

## Notes

  * I am not a lawyer. Nothing I say or any information provided by this project is legal advice. If you are concerned about software licensing, contact a legal professional in your juristiction.
  * This project does not recursively scan dependencies of dependencies at the moment. This means that even if you are not in conflict with the license that one of your dependencies is released under, it's possible that one of your dependencies is in conflict with one of *its* dependencies and may need to be re-licensed under a license that you are not compatible with. Contributions to allow for conditional recursive scanning are welcome!
  * A lot of information is missing on which licenses are compatible with each other, which often causes the result to be that you are potentially in violation. Contributions backed by authoritative sources adding more information about which licenses are compatible are most welcome.

## Contributing

Bug reports and pull requests are welcome. Changes are expected to be well tested before being merged. Please open an issue before contributing any large change, to avoid doing unnecessary work in case it is a change that would be rejected based on the goals of the project.

## Attribution

Licensing information derived from https://github.com/librariesio/license-compatibility

## License

This project is available under the terms of the [MIT License](http://opensource.org/licenses/MIT).
