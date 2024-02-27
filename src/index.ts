/*
 * Copyright (c) 2024, Clay Chipps; Copyright (c) 2024, Salesforce.com, Inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import fs from "node:fs"
import path from "node:path"

const schemas: {[key: string]: string;} = {}

fs.readdirSync(__dirname)
  .filter(filename => filename.endsWith("schema.json"))
  .forEach(schema => {
    schemas[path.basename(schema, ".schema.json")] = path.resolve(
      path.join(__dirname, schema)
    );
  })

module.exports = schemas