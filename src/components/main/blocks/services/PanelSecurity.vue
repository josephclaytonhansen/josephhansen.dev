<script setup>
    import { ref, computed, onMounted } from 'vue'
    import bazaarLogo from '@/assets/main/bazaar-600px.webp'
    import { ShieldCheck, Send } from 'lucide-vue-next'
    const props = defineProps({
        brightness: Number
    })
    const attacks = ref(9274)

    const iconClass = (brightness) => {
                if (brightness >= 4){
                    return 'text-emerald-500'
                } else if (brightness == 3){
                    return 'text-orange-200'
                } else if (brightness == 2){
                    return 'text-orange-500'
                } else if (brightness == 1){
                    return 'text-orange-400'
                }
            }

    const pClass = (brightness) => {
                if (brightness >= 4){
                    return 'text-slate-800'
                } else if (brightness == 3){
                    return 'text-slate-200'
                } else if (brightness == 2){
                    return 'text-slate-300'
                } else if (brightness == 1){
                    return 'text-slate-300'
                }
            
    }

</script>

<template>
    <div class = "flex w-full gap-4 p-8 items-center justify-center">
        <div class = "w-6/12">
            
            <h2 class = "text-left text-5xl" :class="pClass(brightness)">I can secure your website.</h2>
            <p class = "text-left text-sm italic opacity-50 mt-3" :class="pClass(brightness)">Website already secure? <b><a href = "" :class = "iconClass(brightness)">How sure</a> are you?</b></p>
            <hr class = "mb-5 mt-1 w-6/12 opacity-25" :class="pClass(brightness)">
            <div class = "prose" :class="pClass(brightness)">
                <p>The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable.</p><p><b> Don't worry, I can help!</b></p>

                <p>My web security specialities include (but aren't limited to):</p>
                <div class = "rounded p-2 flex items-center flex-col" :class="{'bg-slate-100': brightness==5, 'bg-slate-400': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-700':brightness==2, 'bg-slate-800':brightness==1}">
                    <div class = "flex items-center w-full" ><ShieldCheck size = "2rem" :class="iconClass(brightness)"/><h4 class = "font-bold m-0" :class="pClass(brightness)">WordPress Protection</h4>
                    </div>
 
                        <p>I have close to a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a <em>very</em> long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle.</p>

                </div>

                <div class = "h-3"></div>

                <div class = "rounded p-2 flex items-center flex-col" :class="{'bg-slate-100': brightness==5, 'bg-slate-400': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-700':brightness==2, 'bg-slate-800':brightness==1}">
                    <div class = "flex items-center w-full" ><ShieldCheck size = "2rem" :class="iconClass(brightness)"/><h4 class = "font-bold m-0" :class="pClass(brightness)">DDoS/Malicious Bots Shielding</h4>
                    </div>
                        <p>The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows? What I <em>do</em> know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it.</p>

                </div>

                <div class = "h-3"></div>

                <div class = "rounded p-2 flex items-center flex-col" :class="{'bg-slate-100': brightness==5, 'bg-slate-400': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-700':brightness==2, 'bg-slate-800':brightness==1}">
                    <div class = "flex items-center w-full" ><ShieldCheck size = "2rem" :class="iconClass(brightness)"/><h4 class = "font-bold m-0" :class="pClass(brightness)">JavaScript/PHP Vulnerabilities</h4>
                    </div>
                        <p>If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it.</p>

                </div>

            </div>

        </div>
    
    <div class = "flex flex-col gap-4 w-4/12">

        <div class = "rounded p-8 flex" :class="{'bg-slate-100': brightness==5, 'bg-slate-400': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-700':brightness==2, 'bg-slate-800':brightness==1}">

                <div class = "prose text-center">
                    <h3 class = "text-5xl font-monospace mt-6" :class = "iconClass(brightness)">
                    {{ attacks  }}+</h3>
                    <h3 class = "text-xl" :class = "pClass(brightness)">attacks blocked on <a :class = "iconClass(brightness)" href = "https://bazaar.blendernation.com">BlenderNation Bazaar</a>
                    </h3>
                    <p class = "italic opacity-50 text-sm" :class="pClass(brightness)" ><a href = "" :class = "iconClass(brightness)">Read more</a> about the Bazaar project</p> 
                </div>
    
        </div>

        <div class = "h-3"></div>
        <hr class = "opacity-50" :class="pClass(brightness)">
        <div class = "h-3"></div>

        <div class = "rounded p-8 flex" :class="{'bg-slate-100': brightness==5, 'bg-slate-400': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-700':brightness==2, 'bg-slate-800':brightness==1}">
            <div class = "prose text-center">
                <h4 class = "text-2xl mt-6" :class = "pClass(brightness)">Piqued your interest? Hit me up:</h4>
                    <form>
                        <input type="text" placeholder="Name" class = "rounded p-2 w-full" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-600':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">
                        <input type="email" placeholder="Email" class = "rounded p-2 w-full mt-3" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-600':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">
                        <textarea placeholder="Message" class = "rounded p-2 w-full mt-3" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-600':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}"></textarea>
                        <button type="submit" class="rounded px-5 py-2 text-white font-semibold w-full mt-2" :class="{'bg-emerald-600': brightness>= 4, 'bg-slate-500': brightness == 3, 'bg-orange-600': brightness==2, 'bg-orange-500': brightness==1}">Contact Me</button>
                    </form>
            </div>

        </div>
        
        
    </div>
</div>
</template>