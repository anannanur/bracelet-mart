import React from 'react';

const Answer = () => {
    return (
        <div>
            <h2>How does React work?</h2>
            <p>React বর্তমান সময়ে অনেক জনপ্রিয় জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক। এর পেছনে অনেক
                strong reason রয়েছে। React actual DOM এর আদলে তৈরি করে virtual DOM,
                যা actual DOM এর তুলনায় অনেক easy এবং simple. UI এর কোন state এ
                পরিবর্তন আসলে React underneath এ চেক করে যে exactly কোন জায়গাটায়
                change আসছে। এই কাজ টা সে করে diff algorithm এর মাধ্যমে actual DOM আর
                virtual DOM এর মধ্যে compare করার মধ্য দিয়ে। এরপর সেই exact জায়গায় সে
                পরিবর্তন করে দেয়। এই process এর মাধ্যমে rendering পারফরম্যান্স অনেক
                ভালো হয়।</p>
            <h2>What are the differences between props and state?</h2>
            <p>Props হল read-only. State asynchronously change হয়। props কে modify করা
                যায়না। অন্যদিকে state কে this.setState use করে modify করা যায়। state হল mutable আর props হল
                immutable. Props কে parent component থেকে pass করতে হয়। আর state
                কে parent component এই define করা যায়।</p>
        </div>
    );
};

export default Answer;