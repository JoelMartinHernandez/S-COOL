
import { createClient } from '@/utils/supabase/server';
import { Contact } from '@/app/types/types';
import { info } from 'console';




export async function addContact(contact_message : string) {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    console.log(user)
    if(user.data.user){
        const { data, error } = await supabase
        .from('contact')
        .insert([
            { contact_message: contact_message, user_id:  user.data.user.id },
        ])
        .select()
        if(data){
        return data[0] as Contact;
        }
    }
}

