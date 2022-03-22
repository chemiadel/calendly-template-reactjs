import Head from 'next/head'
import type { CustomNextPage } from '_utils/types'

const Home: CustomNextPage = () => {
  return ( <>
        {/*---HERO---*/}
        <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
            <div className="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0">
                <h1 className="text-4xl lg:text-6xl leading-none mb-4"><strong className="font-black">Schedule </strong> Meetings</h1>
                <p className="lg:text-lg mb-2 sm:mb-12">Business meetings, Seminars, Tution classes, Yoga classes, Consulting, Speaking opportunity at an event, Mentorship, or anything.</p>
                <a href="#" 
                className="font-semibold text-lg border border-black text-black py-3 px-10 rounded-md">
                  Learn more</a>
            </div>
            <div className="sm:w-3/5">
                <svg className="w-full" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370.6 270.58"><path d="M329.44 142.22A142.22 142.22 0 1098.1 253.05h178.23a141.94 141.94 0 0053.11-110.83z" fill="#ededec"/><path d="M167.18 226.41h33.89v11.92a14.31 14.31 0 01-14.31 14.31h-5.27a14.31 14.31 0 01-14.31-14.31v-11.92z" fill="#252527"/><path d="M157.25 189.58h54v39.18a10.77 10.77 0 01-10.77 10.77H168a10.77 10.77 0 01-10.77-10.77v-39.18h.02z" fill="#a098a2"/><path d="M211.46 212.63H156.7a6.52 6.52 0 01-6.51-6.51 6.51 6.51 0 016.51-6.51h54.76a6.5 6.5 0 016.51 6.51 6.51 6.51 0 01-6.51 6.51z" fill="#bdb6bf"/><path d="M178.65 212.63h-11.47a6.51 6.51 0 01-6.51-6.51 6.5 6.5 0 016.51-6.51h11.47a6.51 6.51 0 016.51 6.51 6.52 6.52 0 01-6.51 6.51z" fill="#d8d3d8"/><path d="M211.46 232.36H156.7a6.51 6.51 0 01-6.51-6.51 6.52 6.52 0 016.51-6.51h54.76a6.51 6.51 0 016.51 6.51 6.5 6.5 0 01-6.51 6.51z" fill="#bdb6bf"/><path d="M173.24 232.36h-.66a6.51 6.51 0 01-6.51-6.51 6.52 6.52 0 016.51-6.51h.66a6.51 6.51 0 016.51 6.51 6.5 6.5 0 01-6.51 6.51z" fill="#d8d3d8"/><path d="M261.15 100.06c0-39.23-34.4-71-76.85-71s-76.85 31.8-76.85 71c0 23.51 12.36 44.34 31.4 57.27s8.93 4.91 9.92 18.22v9.56c0 4.48 3.93 8.12 8.79 8.12h53.61c4.86 0 8.79-3.64 8.79-8.12v-9.65c1-13.25 9.75-18.08 9.75-18.08 19.06-12.93 31.44-33.79 31.44-57.32z" fill="#e5bf47"/><circle cx="185.19" cy="106.73" r="55.52" transform="rotate(-77.7 185.17293 106.73552)" fill="#ebcd73"/><path d="M176.2 193.23v-80.08a10.73 10.73 0 00-10.73-10.73h0a10.73 10.73 0 00-10.73 10.73v6a10.73 10.73 0 0010.73 10.73h18.52" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2.20521"/><path d="M192 193.23v-80.08a10.72 10.72 0 0110.72-10.73h0a10.72 10.72 0 0110.73 10.73v6a10.72 10.72 0 01-10.73 10.73h-19.94" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2.20521"/><path d="M138.5 66.42a60.47 60.47 0 0118.5-15.2" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="13.1376"/><path d="M126.24 116.77a60.41 60.41 0 01-1.24-12.34M245.39 104.43a60.2 60.2 0 01-2.22 16.28" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9.03208"/><path fill="none" stroke="#262525" strokeMiterlimit="10" strokeWidth=".99051" d="M0 252.65h362.51M60.25 270.09H161"/><path d="M368.59 164.53h-16.76a2 2 0 01-2-2 2 2 0 012-2h16.75a2 2 0 012 2 2 2 0 01-1.99 2zM68.37 29.53H34.11a2 2 0 01-2-2 2 2 0 012-2h34.26a2 2 0 012 2 2 2 0 01-2 2z" fill="#afd5f1"/><rect x="328.27" y="28.2" width="6.24" height="6.04" rx="1.52" transform="rotate(-.08 329.43068 28.87789)" fill="#afd5f1"/><rect x="3.07" y="153.87" width="6.24" height="6.04" rx="1.52" transform="rotate(-.08 7.05197 157.56837)" fill="#afd5f1"/><rect x="82.12" y="122.87" width="5.48" height="5.31" rx="1.34" transform="rotate(-.08 78.69668 121.80851)" fill="#fff"/><path d="M192.5 15.77h-16.69a2 2 0 01-2-2 2 2 0 012-2h16.69a2 2 0 012 2 2 2 0 01-2 2z" fill="#fff"/><path d="M353.28 96.77h-15.89a3.84 3.84 0 01-3.85-3.84 3.84 3.84 0 013.85-3.84h15.89a3.84 3.84 0 013.84 3.84 3.84 3.84 0 01-3.84 3.84z" fill="#da9a9a"/><path d="M342.1 92.94a1 1 0 11-1-1 1 1 0 011 1zM346.31 92.93a1 1 0 01-1 1 1 1 0 010-2 1 1 0 011 1zM350.53 92.91a1 1 0 01-1 1 1 1 0 010-2 1 1 0 011 1z" fill="#fff"/><circle cx="55.85" cy="76.92" r="14.1" fill="#41599e"/><path d="M60.64 73.29a2.92 2.92 0 00-4.14 0l-.74.76-.76-.71a2.92 2.92 0 10-4.1 4.17l2.84 2.8a2.78 2.78 0 001.6.8 2.92 2.92 0 002.54-.84l2.8-2.86a2.92 2.92 0 00-.04-4.12z" fill="#fff"/><path d="M265.25 17H293a3.35 3.35 0 013.35 3.35v23.96a3.35 3.35 0 01-3.35 3.35h-26.8a4.29 4.29 0 01-4.29-4.29v-23a3.35 3.35 0 013.34-3.37z" fill="#6094cb"/><path d="M276.28 39c2.92 0 5.88.09 8.56-.1.85-.06 1.59-1.41.56-1.83a1.94 1.94 0 001.06-.93.91.91 0 00-.52-1.21c1 .25 1.42-1.35.63-1.87a2.38 2.38 0 00.85-1.37 1.37 1.37 0 00-.61-1.42 2.24 2.24 0 00-1.06-.18h-3.64a8.44 8.44 0 00-.54-5.64c-.29-.51-1.08-1.11-1.7-.72s-.42 1.26-.39 1.83a6.41 6.41 0 01-3.31 5.86s.14 4.96.11 7.58zM270.8 31.34h4.42v7.6h-4.42z" fill="#fcfbfb"/><path d="M329.16 253.05a1.4 1.4 0 01-1.3-.91l-37.62-103.31-37.63 103.31a1.38 1.38 0 11-2.6-.94l38.93-106.89a1.38 1.38 0 012.6 0l38.92 106.89a1.38 1.38 0 01-.83 1.77 1.26 1.26 0 01-.47.08z" fill="#354f92"/><path d="M294.72 158.49h-20.48a1.38 1.38 0 110-2.76h20.48a1.38 1.38 0 110 2.76zM300 173.56h-19.52a1.38 1.38 0 110-2.76H300a1.38 1.38 0 010 2.76z" fill="#354f92"/><path d="M278.32 173.56h-18.7a1.38 1.38 0 010-2.76h18.7a1.38 1.38 0 010 2.76zM305.27 188.64h-19.52a1.39 1.39 0 010-2.77h19.52a1.39 1.39 0 010 2.77zM274.24 188.64h-19.52a1.39 1.39 0 010-2.77h19.52a1.39 1.39 0 010 2.77zM310.54 203.71H291a1.39 1.39 0 010-2.77h19.52a1.39 1.39 0 010 2.77zM268.5 203.71H249a1.39 1.39 0 010-2.77h19.5a1.39 1.39 0 110 2.77zM315.81 218.78h-19.52a1.38 1.38 0 010-2.76h19.52a1.38 1.38 0 110 2.76zM263.21 218.78h-19.52a1.38 1.38 0 110-2.76h19.52a1.38 1.38 0 010 2.76zM321.09 233.85h-19.52a1.38 1.38 0 110-2.76h19.52a1.38 1.38 0 110 2.76zM257.78 233.85h-19.52a1.38 1.38 0 010-2.76h19.52a1.38 1.38 0 010 2.76zM290.14 146.17h-20.49a1.39 1.39 0 010-2.77h20.49a1.39 1.39 0 010 2.77z" fill="#354f92"/><path fill="#c3845c" d="M296.29 211.04l.63-11.08 5.94.78-1.17 11.64-5.69-1.01.29-.33z"/><path d="M302.52 209.55s-4 2.06-6.23-1l-10.79 5.8 18.49-.11z" fill="#070308"/><path fill="#a098a2" d="M285.49078 214.36187l18.48963-.11618.0105 1.66997-18.48964.11618z"/><path d="M302.7 136.85s-5.34 3.15-6 20.76-1.7 47.17-1.7 47.17h9l4.62-57.37-1.21-10.56z" fill="#e1b846"/><path fill="#c3845c" d="M311.82 211.04l-.59-11.08 5.95.78.04 11.64-5.68-1.01.28-.33z"/><path d="M318.05 209.55s-4 2.06-6.22-1l-10.8 5.8 18.49-.11z" fill="#070308"/><path fill="#a098a2" d="M301.02047 214.3643l18.48964-.11618.0105 1.66996-18.48964.11618z"/><path d="M314.89 139.13s5.4 6.25 4.6 17.19l-.26 48.58-10.23-.26-3.24-66.13z" fill="#e1b846"/><path fill="none" stroke="#d1a73e" strokeMiterlimit="10" strokeWidth=".75" d="M307.06 167.23l-.57-14.08-3.87-5.37"/><path d="M269.24 117.07l11.5 10.93a3.14 3.14 0 004.92-.78l1.11-2-15.55-11.32z" fill="#c3845c"/><path d="M271.48 115.54a3.51 3.51 0 11-2.26-4.43 3.52 3.52 0 012.26 4.43z" fill="#c3845c"/><path d="M269 111.06l-3.23-2a.6.6 0 00-.83.12.5.5 0 00.07.7l3.07 2.73zM282.51 123l14.81-5.47-.7 7s-8 3.47-13 4.26-1.11-5.79-1.11-5.79z" fill="#c3845c"/><path d="M301.19 117.27s-1.36-2.11-4.86-.64-9.92 3.63-9.92 3.63l5.59 9.54 10.54-4z" fill="#6094cb"/><path d="M315.3 115.16l-7.82-.75-9.8 1.8s-.65 14.1 1 21.35a2.61 2.61 0 002.74 2.05l14 .2a5.5 5.5 0 002-4.29l-1-19.22a1.2 1.2 0 00-1.12-1.14z" fill="#6094cb"/><path fill="none" stroke="#558bbf" strokeMiterlimit="10" strokeWidth=".75" d="M297.2 127.4l-.48-5.39"/><path d="M339.22 148.73L293.64 144a1.85 1.85 0 01-1.66-2l.55-5.49a1.85 1.85 0 012-1.66l45.57 4.75a1.86 1.86 0 011.67 2l-.55 5.49a1.85 1.85 0 01-2 1.64z" fill="#41599e"/><path d="M326.54 139.37a33.08 33.08 0 011.79-3.39l-5.12-10.58c-.71-2.11-5.17-9.44-7-8.16-1.34.93-.47 9.15.24 10.63l5.44 10.37z" fill="#c3845c"/><path d="M314.54 115.07s4.5.33 6.24 3.07c2.22 3.48 6 9.1 6 9.1l-11.5 4.31z" fill="#6094cb"/><path fill="none" stroke="#558bbf" strokeMiterlimit="10" strokeWidth=".75" d="M316.89 130.96l-4.3-7.39"/><path d="M323.29 134l-12.55 9.07 2 2.93 13.6-5.89a3.42 3.42 0 001.22-5.38 3.42 3.42 0 00-4.27-.73z" fill="#c3845c"/><path d="M313.09 145.58s-1.7 4.06-4.92 3.66c-3.72-.47-4-3.42-2.34-4l2.51.18a2.78 2.78 0 011.61-2.32 3.79 3.79 0 011.34-.3z" fill="#c3845c"/><path d="M310.52 142.9l-3.47.63a.49.49 0 00-.39.48.5.5 0 00.45.5l3.35.28z" fill="#c3845c"/><path d="M296.22 104.25a15.61 15.61 0 002.3-2.9l1.05-2.68 3.32.91-1.61 3.3-.91.63 6.7 7.8s-4.85 4.69-9.53 1.73c-3.94-2.49-3.3-7.12-1.32-8.79z" fill="#232132"/><path d="M314.54 100.44a6.15 6.15 0 002.43 3.81c2 1.36 2.62 6.3-1.32 8.79-4.68 3-9.53-1.73-9.53-1.73z" fill="#232132"/><path d="M301.33 96s9.41-4 12.67 2.2c1.88 3.67-.37 10.09-5 11.93-4.4 1.74-3.15-12.62-3.15-12.62z" fill="#232132"/><path d="M302.52 104.85a2.16 2.16 0 11-2.33-2 2.15 2.15 0 012.33 2z" fill="#af6b48"/><path d="M303.19 110.87l.37 4.68a2.33 2.33 0 002.82 2.31 2.62 2.62 0 002.67-2.32l-.93-7.34z" fill="#c3845c"/><path fill="#af6b48" d="M303.45 114.25l5.4-4.92-5.71 1.06.31 3.86z"/><path d="M304.63 111.61c-2.77 0-5.09-2.1-5.2-4.36l-.24-5.33a5.26 5.26 0 014.8-5.51c2.9-.24 5.94 1.86 6.19 4.76l.15 4.29a6 6 0 01-5.7 6.15z" fill="#c3845c"/><path d="M309.48 105a4.11 4.11 0 00-1.83-2.87c-1.61-.94-6-2.32-5.58-5.74 0 0 6.84-2 9.37 2.47s-1.96 6.14-1.96 6.14z" fill="#232132"/><path d="M313 105a2.15 2.15 0 11-2.33-2 2.15 2.15 0 012.33 2z" fill="#c3845c"/><path d="M303.88 96.36s-.5 2.81-4.85 4.69c0 0-1.08-2 1.81-4.74a1.47 1.47 0 011-.39h3.36z" fill="#232132"/><path d="M311.33 114.76l-4.33-.46-5.77 1.26s0 4.15 4.69 3.87a5.82 5.82 0 005.41-4.67z" fill="#c3845c"/><path d="M308.39 253.05a1.38 1.38 0 01-1.3-.91l-37.63-103.31-37.62 103.31a1.38 1.38 0 11-2.6-.94l38.92-106.89a1.38 1.38 0 012.6 0l38.93 106.89a1.38 1.38 0 01-.83 1.77 1.26 1.26 0 01-.47.08z" fill="#6094cb"/><path fill="#e5b699" d="M57.49 234.26l-.77 11.39-5.25-.22.18-11.54 5.84.37z"/><path d="M57.11 244.39l9.57 4.36a1.52 1.52 0 01.79 1.7H50.6l.62-6.13z" fill="#070308"/><path fill="#bdb6bf" d="M67.69 252.27H50.3v-1.82h17.39z"/><path fill="#e5b699" d="M40.4 234.26l-.77 11.39-5.25-.22.18-11.54 5.84.37z"/><path d="M40 244.39l9.56 4.36a1.52 1.52 0 01.8 1.7H33.5l.63-6.13z" fill="#070308"/><path fill="#bdb6bf" d="M50.59 252.27H33.2v-1.82h17.39z"/><path fill="#41599e" d="M54.46 180.76l-20.14 1.53-2.67 56.58h11.03l3.58-42.67 4.78 18.23-1.63 25.13 9.4.03 3.24-27.79-7.59-31.04z"/><path fill="none" stroke="#33559a" strokeMiterlimit="10" strokeWidth=".75" d="M50.76 193.74l-4.5 2.46"/><path fill="#dea59a" d="M54.2 163.5l-.13 5.55 3.15.04-.23-5.98-2.79.39z"/><path d="M54.39 154.07s5.06 3 4.33 12.51L54 165.53z" fill="#da9a9a"/><path d="M44.24 150.94a43.86 43.86 0 00-10.82 1.75l.22 32.25 21.41-1.65-.22-28.2a1.38 1.38 0 00-.72-1.19l-5.92-2.53s-2.92-.43-3.95-.43z" fill="#da9a9a"/>
                <path fill="none" stroke="#cd8988" strokeMiterlimit="10" strokeWidth=".75" d="M54.9 165.72v-6.22"/><path d="M36 163.56l-1.38 15.95s-1.52 3.21-4.21-.13S30 163 30 163z" fill="#e5b699"/><path d="M36.67 166.91s1.74-13.55-2-14.24-7.51 8.41-7.51 16z" fill="#da9a9a"/><path fill="none" stroke="#cd8988" strokeMiterlimit="10" strokeWidth=".75" d="M35.65 167l1.43-.42.27-6.4"/><path d="M45.1 164.58a4.37 4.37 0 013.59-3.09c2.82-.27 3.65 1.94 3.12 3.39s-2.36 3.82-5.14 2.61-1.57-2.91-1.57-2.91z" fill="#e5b699"/><path d="M49.63 161.49a17.64 17.64 0 014.82 1.32.56.56 0 01.29.57.54.54 0 01-.64.46l-3.82-.71zM33.99 180.32l12.68-12.83-1.57-2.91-12.34 7.84 1.23 7.9z" fill="#e5b699"/><path fill="none" stroke="#d6a485" strokeMiterlimit="10" strokeWidth=".48254" d="M35.33 170.78l-2.57 1.64"/><path d="M62.43 167.8l-5.34 15.84a1.18 1.18 0 01-1.29.81l-13-1.7a1.2 1.2 0 01-1-1.59l5.49-15.82a1.19 1.19 0 011.29-.79l12.81 1.68a1.2 1.2 0 011.04 1.57z" fill="#131314"/><path fill="#131314" d="M62.2 166.63l.68.88-20.21 15.6-.72-.95 20.25-15.53z"/><path d="M63 168.59l-5.3 15.84a1.2 1.2 0 01-1.29.81l-13-1.71a1.19 1.19 0 01-1-1.58L48 166.13a1.21 1.21 0 011.29-.8L62.05 167a1.21 1.21 0 01.95 1.59z" fill="#445057"/><path d="M62.43 173.19l-1.21 3.28a.92.92 0 01-1 .59 2 2 0 01-1.67-2.61l.35-1.1a2 2 0 012-1.42h.68a.91.91 0 01.85 1.26zM48.91 146.15l-.64 5.2a2.56 2.56 0 01-3.17 2.43c-1.48-.2-3-1.13-2.76-2.73l.77-8.16z" fill="#e5b699"/><path d="M48.32 150.94s-5.86-2.12-5.36-7.37c.14-1.56 6 2.35 6 2.35z" fill="#d6a485"/><path d="M49.57 152l-2.52-1.18-4.46.13-2.61.37s-1 3.91 5.63 4.13c5.28.13 3.96-3.45 3.96-3.45z" fill="#e5b699"/><path d="M52.4 139.4s5.08-3.79 2.76-7.29-6.54-.47-6.54-.47zM48.32 130.71s-14.32-2-8 9.06l1.63-4.5z" fill="#1e2325"/><path d="M52.67 133.74s2.4 2-.61 6.4l-.8-5.62z" fill="#1e2325"/><path d="M50 141.44a2.13 2.13 0 102.37-1.93 2.17 2.17 0 00-2.37 1.93z" fill="#cb987b"/><path d="M46.7 148a5.53 5.53 0 005.8-4.69l.41-5.28a5.81 5.81 0 00-5-6.33c-3.13-.38-6.51 1.87-6.88 5.1l-.27 4.12A6.59 6.59 0 0046.7 148z" fill="#e5b699"/><path d="M52.93 136.75s.2-1.38-2.52-1.72-6.23-.11-8.17 2.32v3.81l-2.43-2.4 1.28-5.68 7.27-2.37 4.35 3z" fill="#1e2325"/><path d="M38 140.66a2.11 2.11 0 102.34-1.91 2.13 2.13 0 00-2.34 1.91z" fill="#e5b699"/><path d="M50.47 131.81s.65-1.66-1.63-2.58c-2-.79-4-.45-8.37 2.51zM52 145.61a.86.86 0 00-.52-.78 8.91 8.91 0 00-2.21-.61 12 12 0 00-4.24.48 1 1 0 01-1.11-.5 12 12 0 01-1-8.23l-1.52 1.1.2 2.33s1.18 2.52-.67 3.64c0 0-.09 5.21 4.75 6.15a7.14 7.14 0 004.27-.57 3.49 3.49 0 002.05-3.01z" fill="#1e2325"/><path d="M42.37 138.48a2.71 2.71 0 002-3.84c-1.23-3.1-2.72.84-2.72.84z" fill="#1e2325"/><path fill="#e5b699" d="M84.22 254.74l5.1-8.11 6 3.04-6.15 9.44-4.82-2.17-.13-2.2z"/><path d="M84.12 254.11s2.93 4.73 6.85 3.44l4.49 11.2-15.8-11.42z" fill="#070308"/><path fill="#bdb6bf" d="M78.66277 258.72086l.99612-1.3776 15.79369 11.42013-.99611 1.3776z"/><path fill="#41599e" d="M100.86 206.14l-6.15 26.08-10.35 17.37 9.83 5.7 12.43-22.12 4.11-16.67-9.87-10.36z"/><path fill="#5371b0" d="M94.22 255.83l-10.61-6.29 3.05-5.03 10.59 6.67-3.03 4.65z"/><path fill="#e5b699" d="M131.62 262.72l-3.85-8.77 5.88-3.26 4.36 10.39-4.51 2.77-1.88-1.13z"/><path d="M131 262.45s5.56.23 6.69-3.73l11.79 2.55-18.24 6.51z" fill="#070308"/><path fill="#bdb6bf" d="M131.22115 267.92668l18.32167-6.67578.582 1.59727-18.32168 6.67579z"/><path d="M112.76 199v5.92L128.33 229l9.74 26.34-9.53 3.81-9.83-24.15-18.58-24s-6.25-8.09 1.24-15.2z" fill="#41599e"/><path fill="none" stroke="#33559a" strokeMiterlimit="10" strokeWidth=".75" d="M109.2 222.72l-9.39-12.11"/><path fill="#5371b0" d="M138.8 255.04l-11.08 4.56-2.12-5.49 11.37-4.31 1.83 5.24z"/><path d="M113.86 177.63l7.23 5.27 8.72-11.17 2.7 1.48s-3.24 11-7.55 16.56a2.76 2.76 0 01-3.2.86 44 44 0 01-12.09-7.63z" fill="#d6a485"/><path d="M116 179.21l-5.47 9.12-5.37-4.13a5.29 5.29 0 01-1.19-7.09 5.26 5.26 0 017.68-1.41z" fill="#d1a93b"/><path d="M111.68 175.7l-8.55-2.95s-7.34 6.56-1.76 23.08l11.39 3.17a73.62 73.62 0 001.08-9.93c4.34-6.07-2.16-13.37-2.16-13.37z" fill="#dfb945"/><rect x="127.38" y="154.23" width="31.66" height="31.25" rx="4.95" fill="#6094cb"/><path d="M149.24 168.67l-1-.17a5.08 5.08 0 00-.52-1.25l.59-.83a.76.76 0 00-.09-1l-.6-.6a.76.76 0 00-1-.07l-.83.58a5.05 5.05 0 00-1.25-.51l-.17-1a.75.75 0 00-.74-.63h-.86a.76.76 0 00-.76.63l-.18 1a5.18 5.18 0 00-1.24.52l-.83-.56a.76.76 0 00-1 .09l-.6.59a.77.77 0 00-.09 1l.58.83a5.15 5.15 0 00-.51 1.24l-1 .18a.76.76 0 00-.64.76v.84a.76.76 0 00.64.76l1 .18a5.15 5.15 0 00.51 1.24l-.58.83a.77.77 0 00.09 1l.6.6a.76.76 0 001 .08l.83-.58a5.5 5.5 0 001.25.52l.17 1a.76.76 0 00.76.64h.86a.78.78 0 00.76-.64l.17-1a5.08 5.08 0 001.25-.52l.81.57a.76.76 0 001-.09l.6-.6a.76.76 0 00.09-1l-.59-.84a5.18 5.18 0 00.52-1.24l1-.18a.76.76 0 00.64-.75v-.85a.78.78 0 00-.64-.77zm-6 3.47a2.29 2.29 0 112.29-2.29 2.29 2.29 0 01-2.32 2.29z" fill="#fff"/><path d="M111.93 180.75l6.28 7.6 10.64-9.35 2.24 2.1s-5.86 9.86-11.42 14.18a2.76 2.76 0 01-3.31 0 44.11 44.11 0 01-9.82-10.4z" fill="#e5b699"/><path d="M136.63 175.82a.48.48 0 00-.59-.06l-1.57 1-.12-.09L136 175a.5.5 0 000-.7.57.57 0 00-.78 0l-1.83 1.64-.17-.13 1.73-2.39a.44.44 0 00-.07-.6.52.52 0 00-.72.05l-2 2.15-.19-.15 1.09-2a.45.45 0 00-.15-.6.53.53 0 00-.72.16l-1.12 1.76s-.4.92-.87 1.91l-.32-1.74a.44.44 0 00-.35-.35.47.47 0 00-.56.41c-.08 1.1 0 4.36-.16 4.58l2.24 2.1 4.34-3.59 1.17-1.1a.41.41 0 00.07-.59z" fill="#e5b699"/><path d="M113.75 182.72l-7.67 7.57-4.17-5.29a5.27 5.27 0 01.61-7.15 5.27 5.27 0 017.78.75z" fill="#e1b846"/><path fill="none" stroke="#d1a73e" strokeMiterlimit="10" strokeWidth=".75" d="M108.75 187.82l-2.67 2.47-4.17-5.34M113.75 182.72l-4-4.8"/><path d="M110.64 164.83l4.22-1.08c2.89 1.69 3.34 6.41 3.34 6.41h-7.35z" fill="#1e2325"/><path fill="#e5b699" d="M112.07 167.98l-2.28 6.77-6.19-2.52 3.43-10.17 5.04 5.92z"/><path d="M110.73 172c0-.12-1.16-4.22-1.16-4.22l2.57 1.18z" fill="#d6a485"/><path d="M113.91 153.92s3.21.53 3.39 4.58c0 0 .09 2.93.19 7.15a3.49 3.49 0 01-4.14 3.55 10.43 10.43 0 01-4.14-1.86l-1.86-1.75c-4.34-4.85-.36-12.62 6.09-11.75z" fill="#e5b699"/><path d="M117 162.7l1.46 1.39a.33.33 0 01-.19.56l-1.46.15z" fill="#e5b699"/><path d="M109.63 161.16s-1.91-9.82 6.57-5.82c0 0-3.28-5.37-10.74-2.12a6.49 6.49 0 00-3.48 4.26c-.47 2.72 1 5 3.46 9.3l2.84-3.3a11.92 11.92 0 011.35-2.32z" fill="#1e2325"/><path d="M106.9 158.28l1.7 4.05c10.86-3.39 5.91-8.47 5.91-8.47s-8.78-2.61-7.61 4.42z" fill="#1e2325"/><path fill="#1e2325" d="M112.36 160.22l-1.53 2.27-1.91-2.66 3.44.39zM112.94 154.39s3.72.62 4.26 3.21c0 0 2.93-3-3.13-4.28-3.6-.75-1.13 1.07-1.13 1.07zM109 163.48s-.7 4.93-.23 6.68l-9.1-.49a17.52 17.52 0 001.82-5.67c.11-1.95-.88-6.4 2.13-9.42l1.5 5.84z"/><path d="M106.61 162.5a2.15 2.15 0 102.31-2 2.14 2.14 0 00-2.31 2zM103.13 172.75a12.57 12.57 0 008.55 2.95l-3.68-4.39-3.62-.76z" fill="#e5b699"/></svg>
            </div>
        </div>
        {/*---SERVICES---*/}
        <div className="container pt-10 mx-auto px-6 sm:px-12  ">
            <div className="mx-auto mt-8 sm:mt-0 flex flex-col">
                <h1 className="text-2xl lg:text-4xl leading-none mb-4 text-center mt-12"><
                  strong className="font-black">
                  What 30mins offers?
                  </strong>
                </h1>
                <p className="text-2xl text-semibold text-gray mb-4 sm:mb-12 text-center">
                  We make scheduling and earning easy!
                </p>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20">
              {['','','','','',''].map((item, key) => <Service key={key}/>)}
            </div>
        </div>
        
        {/*---FEEDBACK---*/}
        <div className="container pt-10 mx-auto px-6 sm:px-12  mb-16">
            <div className="mx-auto mt-8 sm:mt-0 flex flex-col">
                <h1 className="text-2xl lg:text-4xl leading-none mb-4 text-center"><
                  strong className="font-black">
                  Here's what our customers are saying
                  </strong>
                </h1>
                <p className="text-2xl text-bold text-gray mb-4 sm:mb-12 text-center">
                  We make scheduling and earning easy!
                </p>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20">
              {['','',''].map((item, key) => <Feedback key={key}/>)}
            </div>
        </div>
    </>
  )
}

const Service = () => <div className="flex flex-col">
<svg  className="w-48 h-48 mx-auto" xmlns="http://www.w3.org/2000/svg" id="currentIllo" data-name="Layer 1" width="920.75017" height="740.38145" viewBox="0 0 920.75017 740.38145"><path d="M962.87446,441.80928q0,9.97494-.54,19.81a360.63906,360.63906,0,0,1-11.36,72.57c-.01.01-.01.01,0,.02-.81995,3.14-1.69,6.27-2.61,9.37-.04.15-.08.29-.13.43006q-2.04,6.97494-4.36,13.81994v.01a362.27727,362.27727,0,0,1-343,245.97c-171.23,0-314.68-118.87-352.34-278.6a362.65664,362.65664,0,0,1-9.66-83.4q0-8.37.38-16.65a360.161,360.161,0,0,1,63.25-188.38c.46-.68.93-1.36,1.41-2.03,65.42-93.67,174.04-154.94,296.96-154.94,173.72,0,318.85,122.36,353.91,285.6a.031.031,0,0,1,.01.02q3.39,15.78,5.38,32.04A362.557,362.557,0,0,1,962.87446,441.80928Z" transform="translate(-139.62491 -79.80928)" fill="#f2f2f2"/>
<path d="M1057.14039,745.43071a96.90134,96.90134,0,0,1-12.51,27.53c-12.48,18.87-30.34,33.3-49.97,44.85-1.36.81-2.74,1.6-4.12,2.38h-13.77l-.48-1.1v-.01l-.55994-1.27-.07006-.15-.03.15-.55,2.38h-6.75989c-.55994-.79-1.11-1.58-1.65-2.38-.79-1.17-1.55005-2.35-2.27-3.55a57.6339,57.6339,0,0,1-3.39991-6.52c-.12011-.25-.22009-.5-.32007-.75l.45-.49-1.86988-8.18,3.75989-.62-4.12-12.71c.15-.47.32006-.94.5-1.41,2.31005-5.85,6.65-10.22,11.8-13.89,5.30005-3.79,11.47-6.83,17.1399-9.99,2.66015-1.49,5.28-3.06,7.83008-4.72v-.01q4.89-3.16506,9.49-6.77a1.42508,1.42508,0,0,0,.15-.11,1.06829,1.06829,0,0,0,.12-.1,140.902,140.902,0,0,0,34.31006-38.93.0098.0098,0,0,0,.01-.01c.29993-.48.57984-.96.85987-1.44995v-.01a136.25522,136.25522,0,0,0,9.41-19.65v-.01c.20007-.5.38-1,.57-1.5q.39.66.75,1.32a.0098.0098,0,0,1,.01.01C1061.55042,705.11071,1062.47046,726.01073,1057.14039,745.43071Z" transform="translate(-139.62491 -79.80928)" fill="#f0f0f0"/><path d="M1051.85035,687.76073a121.36532,121.36532,0,0,1-2.86988,27.54,118.54078,118.54078,0,0,1-3.3601,12.24,121.34541,121.34541,0,0,1-10.12989,22.6c-.23.39-.45007.77-.69006,1.15v.01a102.347,102.347,0,0,1-5.75,8.66,47.72183,47.72183,0,0,1-11.4,11.46,30.08876,30.08876,0,0,1-11.98,4.63c-.80005.15-1.62.26-2.45.36005-3.31005.38995-6.73.54-10.01,1.24a21.84833,21.84833,0,0,0-4.82006,1.55c-5.28,2.45-8.25,7.58-9.55005,13.06-.23.96-.40992,1.93-.54993,2.9-1.09,7.45.11,15.19-.51,22.65-.06995.79-.16,1.59-.2699,2.38h-.74011l-.48-1.1v-.01c.04993-.42.09-.84.13-1.27a96.29456,96.29456,0,0,0,.09008-11.01c-.04-1.65-.07007-3.31-.05-4.97.02-1.33.06995-2.66.16993-3.98v-.01c.07006-.82.15-1.63.26-2.44a31.58574,31.58574,0,0,1,1.82006-7.25,18.15179,18.15179,0,0,1,10.31995-10.68,26.99328,26.99328,0,0,1,4.47009-1.25c3.34986-.64,6.80994-.8,10.17993-1.22.36-.04.72-.09,1.07007-.15.44995-.07.8899-.15,1.32984-.23a28.66623,28.66623,0,0,0,12.16015-5.27,51.9033,51.9033,0,0,0,10.98-11.92005c1.6399-2.35,3.2-4.75,4.64991-7.22a.0098.0098,0,0,1,.01-.01c.07006-.12.14-.23.21-.35l.01-.02a119.57149,119.57149,0,0,0,13.46008-34.17c.09-.44.19006-.88.28992-1.32a120.88781,120.88781,0,0,0,2.67-26.4v-.01c0-.42-.00989-.82995-.0199-1.25-.02-.86,1.30994-1.05,1.32984-.19.01.42.02.84.01,1.26A.0098.0098,0,0,1,1051.85035,687.76073Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/>
<path d="M1034.22955,751.01965a18.01811,18.01811,0,0,0,22.69431-5.41582c.50869-.69934-.55416-1.52268-1.06353-.8224a16.68437,16.68437,0,0,1-21.12073,4.99469c-.76923-.39533-1.27488.85047-.51005,1.24353Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/><path d="M1006.2088,775.01911a34.72851,34.72851,0,0,1,1.2295-25.27921c.35485-.78953-.88911-1.29862-1.24353-.51a36.12286,36.12286,0,0,0-1.22594,26.3079c.27856.82057,1.517.29747,1.24-.51865Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/>
<path d="M1048.23681,714.46342a10.19912,10.19912,0,0,1-7.02236-6.65925c-.268-.82369-1.50625-.29968-1.24.51865a11.42894,11.42894,0,0,0,7.75229,7.38413.69463.69463,0,0,0,.87679-.36674.67543.67543,0,0,0-.36675-.87679Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/>
<path d="M996.17042,754.97075v.01a131.24739,131.24739,0,0,1-2.66993,21.24v.01c-.08007.48-.19006.95-.29,1.42005a184.49564,184.49564,0,0,1-10.1101,31.61q-1.78491,4.32-3.74,8.55c-.35987.8-.73,1.59-1.10987,2.38h-1.4801l-.48-1.1v-.01l-.55994-1.27-.07006-.15-.03.15-.55,2.38H960.7804l-2.77991-2.38-4.05005-3.47,5.65992-6.18.93-1.02.14-.15.45-.49-1.86988-8.18,3.75989-.62-4.12-12.71-1.95-6.01-.49-1.51-2.85009-8.79-8.59986,1.61005-1.40014-4.9a135.98986,135.98986,0,0,0,6.42-18.41c.01-.05.03-.09.04-.13995a141.583,141.583,0,0,0,4.0199-51.96v-.01c-.05994-.56-.12989-1.13-.21-1.68v-.02a133.6311,133.6311,0,0,0-4.31995-21.34c-.14-.53-.29993-1.05-.45007-1.57.46008.2.91.39,1.37011.59l.01.01h.02c.73.32,1.46.66,2.16992,1.02,17.06006,8.29,29.61,23.85,36.74,41.79.02.05.04.09.06.14a96.39369,96.39369,0,0,1,6.57,29.43A114.87063,114.87063,0,0,1,996.17042,754.97075Z" transform="translate(-139.62491 -79.80928)" fill="#f0f0f0"/><path d="M970.22046,820.19072h-1.58007c-.5-.81-1.04-1.6-1.58-2.38q-1.29-1.81494-2.66-3.55c-.79-1-1.58-1.99-2.37-2.98-.81995-1.03-1.63-2.06-2.42-3.12l.93-1.02c.15.2.29993.4.46008.6,2.55994,3.37,5.32984,6.61005,7.69995,10.07C969.23047,818.59075,969.74048,819.38073,970.22046,820.19072Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/><path d="M948.77849,670.81953c.26.33.53.67.78,1.01q2.925,3.795,5.53,7.83a117.98985,117.98985,0,0,1,8.22,14.85c.19.4.38.81.56,1.22a119.26359,119.26359,0,0,1,9.84,35.44c.02.12.03.23.04.35q.49493,4.29.64,8.61a51.78274,51.78274,0,0,1-1.59,16.12c-.2.69-.42,1.37-.66,2.03a27.34469,27.34469,0,0,1-2.25,4.65,27.92323,27.92323,0,0,1-2.14,3.09c-.47.6-.96,1.19-1.48,1.76-.3.33-.61.66-.92.99-.26.25-.51.51-.77.76-2.7,2.62-5.68,5.05-8.12,7.94l.49,1.51c2.35-2.98,5.37994-5.45,8.11-8.05a37.89641,37.89641,0,0,0,4.66-5.28c.18-.26.37-.52.54-.79a26.74859,26.74859,0,0,0,2.38995-4.29c.34-.75.65-1.52.93-2.32a47.89274,47.89274,0,0,0,2.2-16,103.418,103.418,0,0,0-.62-10.39c-.04-.44995-.09-.88995-.15-1.34a121.63824,121.63824,0,0,0-5.52-24.14,122.65985,122.65985,0,0,0-13.76-28.18q-2.475-3.765-5.25-7.35c-.24-.33-.49-.65-.75-.98C949.19853,669.18953,948.24852,670.13954,948.77849,670.81953Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/><path d="M974.53248,731.98591a18.01811,18.01811,0,0,0,14.85943-17.98777.67262.67262,0,0,0-1.34431-.01633A16.68436,16.68436,0,0,1,974.191,730.68593c-.8522.14749-.50587,1.44662.34145,1.3Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/><path d="M966.60881,768.01856a34.72847,34.72847,0,0,1-14.23814-20.92428c-.192-.844-1.49177-.50157-1.3.34145A36.12285,36.12285,0,0,0,965.931,769.17922c.71645.48747,1.39034-.67584.67778-1.16066Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/><path d="M963.70711,694.36446a10.19913,10.19913,0,0,1-9.61629-1.08908c-.70992-.49631-1.38308.66758-.67778,1.16066a11.429,11.429,0,0,0,10.63552,1.22839.69461.69461,0,0,0,.47927-.82071.67545.67545,0,0,0-.82072-.47926Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/><path d="M772.94149,236.78346H140.61813a1.01559,1.01559,0,0,1,0-2.03069H772.94149a1.01559,1.01559,0,0,1,0,2.03069Z" transform="translate(-139.62491 -79.80928)" fill="#cacaca"/><ellipse cx="23.34831" cy="131.59051" rx="10.92534" ry="11.16881" fill="#3f3d56"/><ellipse cx="61.09038" cy="131.59051" rx="10.92534" ry="11.16881" fill="#3f3d56"/><ellipse cx="98.83246" cy="131.59051" rx="10.92534" ry="11.16881" fill="#3f3d56"/><path d="M750.32447,202.99928h-26.81a2.0304,2.0304,0,0,0,0,4.06h26.81a2.0304,2.0304,0,0,0,0-4.06Z" transform="translate(-139.62491 -79.80928)" fill="#3f3d56"/><path d="M750.32447,210.61927h-26.81a2.0304,2.0304,0,0,0,0,4.06h26.81a2.0304,2.0304,0,0,0,0-4.06Z" transform="translate(-139.62491 -79.80928)" fill="#3f3d56"/><path d="M750.32447,218.22926h-26.81a2.0304,2.0304,0,0,0,0,4.06h26.81a2.0304,2.0304,0,0,0,0-4.06Z" transform="translate(-139.62491 -79.80928)" fill="#3f3d56"/><path d="M306.28443,278.15925H277.89448a359.32176,359.32176,0,0,0-33.45,100.05h61.84a14.97405,14.97405,0,0,0,15-15v-70.06A15.00977,15.00977,0,0,0,306.28443,278.15925Z" transform="translate(-139.62491 -79.80928)" fill="#ccc" /><path d="M516.59443,278.15925H387.96449a15.00977,15.00977,0,0,0-15,14.99v70.06a15.01828,15.01828,0,0,0,15,15H516.59443a15.01828,15.01828,0,0,0,15-15v-70.06A15.00977,15.00977,0,0,0,516.59443,278.15925Z" transform="translate(-139.62491 -79.80928)" fill="#ccc" /><path d="M726.90449,278.15925h-128.63a15.00977,15.00977,0,0,0-15,14.99v70.06a15.01828,15.01828,0,0,0,15,15h128.63a15.01832,15.01832,0,0,0,15-15v-70.06A15.00981,15.00981,0,0,0,726.90449,278.15925Z" transform="translate(-139.62491 -79.80928)" fill="#ccc" /><path d="M306.28443,425.15925h-67.03q-.375,8.28-.38,16.65a362.65664,362.65664,0,0,0,9.66,83.4h57.75a15.01828,15.01828,0,0,0,15-15v-70.06A15.00977,15.00977,0,0,0,306.28443,425.15925Z" transform="translate(-139.62491 -79.80928)" fill="#ccc" />
<path d="M516.59443,425.15925H387.96449a15.00977,15.00977,0,0,0-15,14.99v70.06a15.01828,15.01828,0,0,0,15,15H516.59443a15.01828,15.01828,0,0,0,15-15v-70.06A15.00977,15.00977,0,0,0,516.59443,425.15925Z" transform="translate(-139.62491 -79.80928)" fill="#ccc" /><path d="M726.90449,425.15925h-128.63a15.00977,15.00977,0,0,0-15,14.99v70.06a15.01828,15.01828,0,0,0,15,15h128.63q.615,0,1.23-.06a14.303,14.303,0,0,0,4.66-1.15,15.0202,15.0202,0,0,0,9.11005-13.65v-70.2A15.00981,15.00981,0,0,0,726.90449,425.15925Z" transform="translate(-139.62491 -79.80928)" fill="#ccc" /><circle cx="169.34425" cy="285.37316" r="29.75918" fill="#6c63ff"/><path d="M304.9094,380.6707a3.30934,3.30934,0,0,1-2.648-1.32439l-8.11876-10.82519a3.31022,3.31022,0,1,1,5.29649-3.97209l5.31157,7.08155,13.64208-20.46285a3.31036,3.31036,0,1,1,5.50877,3.67251L307.664,379.19652a3.3117,3.3117,0,0,1-2.66252,1.47311C304.97082,380.67017,304.94011,380.6707,304.9094,380.6707Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/><circle cx="386.34425" cy="288.37316" r="29.75918" fill="#6c63ff"/>
<path d="M521.9094,383.6707a3.30934,3.30934,0,0,1-2.648-1.32439l-8.11876-10.82519a3.31022,3.31022,0,1,1,5.29649-3.97209l5.31157,7.08155,13.64208-20.46285a3.31036,3.31036,0,0,1,5.50877,3.67251l-16.23752,24.35628a3.3117,3.3117,0,0,1-2.66252,1.47311C521.97082,383.67017,521.94011,383.6707,521.9094,383.6707Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/>
<path d="M950.93528,528.54445l-9.315-90.16375-2.45863-37.10843,26.07234-4.7144s3.90423,25.5103,7.31974,40.48087c3.37052,14.77276-4.49018,89.52617-4.69845,91.49765a12.68492,12.68492,0,1,1-16.92.00806Z" transform="translate(-139.62491 -79.80928)" fill="#a0616a"/><polygon points="744.583 717.124 731.653 720.08 714.099 671.614 733.182 667.251 744.583 717.124" fill="#a0616a"/>
<path d="M886.54444,791.95924l-3.3.75-.34.08-15.09-2.46-.44-.06994-6.3,7.52a16.65187,16.65187,0,0,0-12.52,19.94l.02.09.11.44,1.92-.44,39.77-9.1Z" transform="translate(-139.62491 -79.80928)" fill="#2f2e41"/><polygon points="821.665 725.578 808.401 725.578 802.092 674.418 821.667 674.419 821.665 725.578" fill="#a0616a"/>
<path d="M960.94447,801.05928l-1.16-.47-13-5.29-.42-.17-7.81,5.93a16.64417,16.64417,0,0,0-16.65,16.64v.54l36.61.01h6.16v-17.19Z" transform="translate(-139.62491 -79.80928)" fill="#2f2e41"/><path d="M941.1166,531.57613l11.15583,105.98071s14.851,106.11694,12.062,120.759.69723,16.7338.69723,16.7338l-25.44814-1.81236s.69723-9.06416-3.48624-13.24757-2.09168-16.73381-2.09168-16.73381L884.64008,570.62166l-29.98137,90.64141s18.94048,73.505,18.24326,74.8995,12,32,12,32l-28.40811,9.42052s3.48619-11.15584-1.3945-14.64208-9.06416-.69722-4.88069-6.97242-32.96106-52.36048-32.14422-82.061c.24572-8.93447.54273-18.52067.89967-28.34222,1.8888-51.97284,5.45554-110.53594,11.97835-113.9892C842.80559,525.30093,941.1166,531.57613,941.1166,531.57613Z" transform="translate(-139.62491 -79.80928)" fill="#2f2e41"/><circle cx="748.66002" cy="209.74428" r="27.4387" fill="#a0616a"/><path d="M979.902,457.16257l-37.2588,9.45768.2588-10.45768-2.82783-3-5.65-29.59721-5.999-76.62693L949.01367,357.858l.02512.01933a55.66237,55.66237,0,0,1,8.928,13.21991c7.76155,15.77859,15.21745,50.5331,19.12034,70.71919a2.20293,2.20293,0,0,0,.74253,1.07,11.41539,11.41539,0,0,1,2.07234,14.27623Z" transform="translate(-139.62491 -79.80928)" fill="#3f3d56"/><path d="M759.725,491.071s51.42772-54.21874,51.9073-55.24066c3.59241-27.28049,13.92471-39.31418,15.47362-38.00777l26.66794,9.23874s-7.93233,25.119-13.303,40.03927c-5.13191,14.25688-64.278,49.07986-65.265,50.79912A12.68491,12.68491,0,1,1,759.725,491.071Z" transform="translate(-139.62491 -79.80928)" fill="#a0616a"/><path d="M866.58449,351.87331s-23.08916-11.31585-32.04437,10.909c-4.90935,12.547-17.46581,42.998-23.72314,61.743a1.40049,1.40049,0,0,1-.17043.33618,15.24092,15.24092,0,0,0-2.59637,8.40919,2.86268,2.86268,0,0,1-.06764.64912s25.37273,4.943,32.91943,18.2428l2.9933-3.24832.53212-2.27586Z" transform="translate(-139.62491 -79.80928)" fill="#3f3d56"/><path d="M950.59948,543.12714c-53.13861,10.97387-123.55809-7.89282-123.55809-7.89282l18.78516-81.42974L839.148,368.587c-.81559-10.42111,5.11995-20.18969,14.35391-23.65126l12.75006-4.7756,10.53881-15.088,30.10339.98771L918.9283,341.9l9.49679,5.03843L949.01366,357.858l.0906.04524v.04524l-6.46109,62.67179-3.89653,37.78781s11.8347,42.49992,9.40608,48.13646c-2.42851,5.62736-.317,2.90881.2719,5.91729.589,3.0086,2.39234,3.19886,2.66413,9.12533C951.36972,527.50455,950.59948,543.12714,950.59948,543.12714Z" transform="translate(-139.62491 -79.80928)" fill="#3f3d56"/><path d="M918.05044,279.78283c-2.16834-2.13913,1.09578-7.80233.4792-10.78526-.70685-3.42-4.4755-3.52009-5.37449-6.89472-.96725-3.63026-4.83512-5.60656-8.41163-6.7571a54.391,54.391,0,0,0-28.34666-1.29833,108.2013,108.2013,0,0,0-12.26345,3.77772c-2.76789.9741-.09867-1.67664-2.86645-.70253a4.34484,4.34484,0,0,0-2.59521,1.72188c-.49756.9408.17345,2.44543,1.22034,2.25484q-5.06841,2.23519-10.13705,4.47041,2.84267,2.97772,5.68533,5.95567c-2.694-.7668-5.5663,2.44533-4.50415,5.03711a5.69338,5.69338,0,0,0,4.35648,3.01589c3.04365.59225.73505,3.4889,3.83535,3.43248s24.71949-6.41153,26.22666-3.70172c1.07322,1.92962.95519,4.48556,2.48758,6.07537,1.9606,2.03393,5.3839,1.29013,7.87944-.03408,2.49544-1.32409,5.02627-3.144,7.83353-2.82651,2.93072.33141,5.14729,5.74728,5.86907,8.60709.72189,2.8598.26592,5.86884-.19347,8.78241-.60331,3.82639-6.64373,7.65267-7.247,11.47895,6.704,1.854,13.89541-4.04486,16.54582-14.30314C918.26559,290.6046,922.67051,284.34107,918.05044,279.78283Z" transform="translate(-139.62491 -79.80928)" fill="#2f2e41"/><circle cx="594.34425" cy="430.37316" r="29.75918" fill="#6c63ff"/><path d="M729.9094,525.6707a3.30934,3.30934,0,0,1-2.648-1.32439l-8.11876-10.82519a3.31022,3.31022,0,1,1,5.29649-3.97209l5.31157,7.08155,13.64208-20.46285a3.31036,3.31036,0,1,1,5.50877,3.67251l-16.23752,24.35628a3.3117,3.3117,0,0,1-2.66252,1.47311C729.97082,525.67017,729.94011,525.6707,729.9094,525.6707Z" transform="translate(-139.62491 -79.80928)" fill="#fff"/><path d="M1054.57044,819.00072a1.18646,1.18646,0,0,1-1.19006,1.19h-280.29a1.19,1.19,0,0,1,0-2.38h280.29A1.18651,1.18651,0,0,1,1054.57044,819.00072Z" transform="translate(-139.62491 -79.80928)" fill="#ccc"/>
</svg>
<h1 className="text-xl lg:text-lg leading-none mb-4 text-center font-bold">
  What 30mins offers?
</h1>
<p className="lg:text-md mb-4 sm:mb-12 text-center text-gray-600">
  We make scheduling and earning easy!
</p>
</div>

const Feedback= () => <div className="border shadow-lg p-4 rounded-lg">
    <p className="p-4 pb-12">
    Ex ad excepteur non sint velit commodo. Culpa velit tempor id do qui. Deserunt commodo tempor mollit eu veniam mollit unt enim.
    </p>
    <div className="flex flex-row space-x-4">
        <img className="rounded-full w-16 h-16" src="https://next-tailwind-yellow.vercel.app/images/testimonial-image-1.jpeg" />
        <div>
          <h1 className="font-bold">Adel Chemi</h1>
          <p>CEO, Acme</p>
        </div>
    </div>
</div>

Home.layout='landingLayout'

export default Home
