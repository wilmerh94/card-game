/* eslint-disable no-unused-expressions */
[
 // .. other plugins
 '@babel/plugin-syntax-jsx'[
  // start here
  ('module-resolver',
  {
   root: ['./src'],
   extensions: ['.jsx', 'js'],
  })
 ],
 // end here
];
