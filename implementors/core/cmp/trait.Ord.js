(function() {var implementors = {};
implementors["log"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='log/enum.LogLevel.html' title='log::LogLevel'>LogLevel</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='log/enum.LogLevelFilter.html' title='log::LogLevelFilter'>LogLevelFilter</a>",];implementors["libc"] = [];implementors["time"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Timespec.html' title='time::Timespec'>Timespec</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.SteadyTime.html' title='time::SteadyTime'>SteadyTime</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Tm.html' title='time::Tm'>Tm</a>",];implementors["regex_syntax"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='regex_syntax/struct.Lit.html' title='regex_syntax::Lit'>Lit</a>","impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='regex_syntax/struct.ClassRange.html' title='regex_syntax::ClassRange'>ClassRange</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='regex_syntax/struct.ByteRange.html' title='regex_syntax::ByteRange'>ByteRange</a>",];implementors["unicase"] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='unicase/struct.UniCase.html' title='unicase::UniCase'>UniCase</a>&lt;T&gt;",];implementors["url"] = ["impl&lt;S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='url/enum.Host.html' title='url::Host'>Host</a>&lt;S&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='url/struct.Url.html' title='url::Url'>Url</a>",];implementors["regex"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for Char",];implementors["hyper"] = ["impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='url/host/enum.Host.html' title='url::host::Host'>Host</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='hyper/struct.Url.html' title='hyper::Url'>Url</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/status/enum.StatusCode.html' title='hyper::status::StatusCode'>StatusCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/status/enum.StatusClass.html' title='hyper::status::StatusClass'>StatusClass</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/version/enum.HttpVersion.html' title='hyper::version::HttpVersion'>HttpVersion</a>",];implementors["igd"] = ["impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='hyper/header/shared/httpdate/struct.HttpDate.html' title='hyper::header::shared::httpdate::HttpDate'>HttpDate</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='hyper/header/shared/quality_item/struct.Quality.html' title='hyper::header::shared::quality_item::Quality'>Quality</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/status/enum.StatusCode.html' title='hyper::status::StatusCode'>StatusCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/status/enum.StatusClass.html' title='hyper::status::StatusClass'>StatusClass</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/version/enum.HttpVersion.html' title='hyper::version::HttpVersion'>HttpVersion</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
