/*
DEV NOTE:
  - For demo purposes, this page will redirect 
    to the Conference Home Page for now.
*/

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/conferences');
}
