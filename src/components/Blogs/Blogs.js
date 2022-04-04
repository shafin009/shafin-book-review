import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    Question-1. What is Context API ?
                </div>
                <div class="card-body">

                    <p class="card-text">Context API হল React Framework প্রদত্ত একটি Component Structure.এটি আমাদের Application-এর সকল levels-এ নির্দিষ্ট From-এর Data Share করতে সাহায্য করে। এটি Prop Drilling-এর সমস্যাও সমাধান করে। প্রকৃতপক্ষে, যে কোনো Situation-এ যেখানে আপনাকে একটি Component-এর মধ্য দিয়ে একটি Prop Pass করতে হবে যাতে এটি Tree-এর নিচে অন্য একটি Component-এ পৌঁছায় সেখানে আপনি Context API ব্যবহার করতে পারেন। Manually  Props-এর মাধ্যমে Data Pass না করে Context API একাধিক Components-এর সাথে Data ভাগ করে ব্যবহার করা যায়।</p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-2. What is Semantic Tag ?
                </div>
                <div class="card-body">

                    <p class="card-text">Semantic Tag হল নির্দিষ্ট কিছু Tag-গুলিকে সংজ্ঞায়িত করার মাধ্যমে স্পষ্টভাবে নির্দেশ করে যে, এই Tag-গুলিতে থাকা বিষয়বস্তুর দ্বারা কী ভূমিকা পালন করা হয় ৷ Semantic Tag Elements ২ ধরণের। যথাঃ-১.Non-Semantic Elements এবং ২.Semantic Elements। Non-Semantic Elements-এর বিষয়বস্তু সম্পর্কে স্পষ্টভাবে সঙ্গায়িত থাকে না।  যেমনঃ- div Tag, span Tag। অপরদিকে, Semantic Elements এর বিষয়গুলো স্পষ্টভাবে সঙ্গায়িত থাকে। যেমনঃ-form Tag,table Tag,article Tag,nav Tag।</p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    Question-3. What is the difference between Inline , Block and Inline-Block Elements ?
                </div>
                <div class="card-body">

                    <p class="card-text">Block Elements সর্বদা একটি নতুন লাইনে শুরু হয় এবং Web Page-এর বাম এবং ডানে Horizontal Space পূরণ করে। Block Elements-এর কিছু উদাহরণ হল div Tag এবং p Tag। Inline Elements নতুন কোনো লাইনে শুরু হয় না, সেগুলি তাদের পাশের Content এবং Tag-গুলির মতো Same Line-এ অবস্থান করে। Inline Elements-এর কিছু উদাহরণ হল span Tag and img Tag । Inline-Block Elements-গুলি অনেকটা Inline Elements-এর মতোই, তবে তাদের সবদিকেই Margin ও Padding করা যায়। Inline-Block Elements এর একটি Common ব্যবহার হচ্ছে Horizontally Navigation Link তৈরির ক্ষেত্রে।</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;