// @ts-nocheck
import fs from "fs";
import { execSync } from "child_process";
import pkg from "../../package.json";

const oldVersion = pkg.version;
const versions = pkg.version.split(".").map(Number);
versions[versions.length - 1]++;
pkg.version = versions.join(".");

console.log(`Bump version: ${oldVersion} -> ${pkg.version}`);

fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2));

execSync(`git add package.json`);
execSync(`git commit -m "Bump version to ${pkg.version}"`);
execSync(`git tag -a v${pkg.version} -m "Bump version to ${pkg.version}"`);
execSync(`git push`);
