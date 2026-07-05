import { $Closeable } from "@package/java/io";
import { $IMixinMusicManager } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $IMixinSoundManager, $IMixinSoundEngine } from "@package/de/keksuccino/melody/mixin/mixins/common/client";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SoundBuffer, $ListenerTransform, $Library, $Library$Pool_, $Channel } from "@package/com/mojang/blaze3d/audio";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $Multimap } from "@package/com/google/common/collect";
import { $SimplePreparableReloadListener, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $List, $Map, $Collection_, $Collection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundSource_, $Music, $SoundSource } from "@package/net/minecraft/sounds";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";

declare module "@package/net/minecraft/client/sounds" {
    /**
     * The SoundEventListener interface defines a listener for sound events.
     * Classes implementing this interface can be registered as listeners to receive notifications when a sound is played.
     */
    export class $SoundEventListener {
    }
    export interface $SoundEventListener {
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SoundEventListener}.
     */
    export type $SoundEventListener_ = ((arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number) => void);
    /**
     * The Weighted interface represents an element with a weight in a weighted collection.
     * It is used to provide weighted selection and retrieval of elements.
     * 
     * @param  The type of the element
     */
    export class $Weighted<T> {
    }
    export interface $Weighted<T> {
        /**
         * @return The weight of the element
         */
        getWeight(): number;
        /**
         * Retrieves the sound associated with the element.
         * The sound is obtained using the provided random source.
         * 
         * @return The sound associated with the element
         */
        getSound(randomSource: $RandomSource): T;
        /**
         * Preloads the sound if required by the sound engine.
         * This method is called to preload the sound associated with the element into the sound engine, ensuring it is ready for playback.
         */
        preloadIfRequired(engine: $SoundEngine): void;
        get weight(): number;
    }
    /**
     * The SoundManager class is responsible for managing sound events and playing sounds.
     * It handles sound event registrations, caching of sound resources, and sound playback.
     */
    export class $SoundManager extends $SimplePreparableReloadListener<$SoundManager$Preparations> implements $IMixinSoundManager {
        /**
         * Stops all sounds associated with the specified ID and category.
         */
        stop(id: $ResourceLocation_ | null, category: $SoundSource_ | null): void;
        /**
         * Play a sound
         */
        stop(sound: $SoundInstance): void;
        stop(): void;
        resume(): void;
        destroy(): void;
        /**
         * Checks if the specified sound is active (playing or scheduled to be played).
         * @return `true` if the sound is active, `false` otherwise
         */
        isActive(sound: $SoundInstance): boolean;
        /**
         * Updates the sound manager's tick state.
         */
        tick(isGamePaused: boolean): void;
        reload(): void;
        addListener(listener: $SoundEventListener_): void;
        removeListener(listener: $SoundEventListener_): void;
        /**
         * Plays a sound with a delay in ticks.
         */
        playDelayed(sound: $SoundInstance, delay: number): void;
        emergencyShutdown(): void;
        /**
         * Updates the sound source position based on the active render info.
         */
        updateSource(activeRenderInfo: $Camera): void;
        /**
         * @return The sound event associated with the specific ResourceLocation, or `null` if not found
         */
        getSoundEvent(location: $ResourceLocation_): $WeighedSoundEvents;
        /**
         * Retrieves a list of available sound devices.
         */
        getAvailableSoundDevices(): $List<string>;
        pause(): void;
        /**
         * Play a sound
         */
        play(sound: $SoundInstance): void;
        /**
         * @return The collection of available sound event locations
         */
        getAvailableSounds(): $Collection<$ResourceLocation>;
        /**
         * Updates the volume of the specified sound source category.
         */
        updateSourceVolume(category: $SoundSource_, volume: number): void;
        getListenerTransform(): $ListenerTransform;
        /**
         * Queues a ticking sound to be played.
         */
        queueTickingSound(tickableSound: $TickableSoundInstance): void;
        getDebugString(): string;
        getSoundEngineMelody(): $SoundEngine;
        static EMPTY_SOUND: $Sound;
        static INTENTIONALLY_EMPTY_SOUND_EVENT: $WeighedSoundEvents;
        static EMPTY_SOUND_LOCATION: $ResourceLocation;
        soundEngine: $SoundEngine;
        static INTENTIONALLY_EMPTY_SOUND_LOCATION: $ResourceLocation;
        static INTENTIONALLY_EMPTY_SOUND: $Sound;
        constructor(options: $Options);
        get availableSoundDevices(): $List<string>;
        get availableSounds(): $Collection<$ResourceLocation>;
        get listenerTransform(): $ListenerTransform;
        get debugString(): string;
        get soundEngineMelody(): $SoundEngine;
    }
    /**
     * The Preparations class represents the prepared sound event registrations and caches for applying to the sound manager.
     */
    export class $SoundManager$Preparations {
    }
    /**
     * Represents a handle to a channel.
     */
    export class $ChannelAccess$ChannelHandle {
        execute(soundConsumer: $Consumer_<$Channel>): void;
        release(): void;
        /**
         * @return `true` if the channel has been stopped, `false` otherwise
         */
        isStopped(): boolean;
        constructor(channel: $ChannelAccess, arg1: $Channel);
        get stopped(): boolean;
    }
    export class $AudioStream {
    }
    export interface $AudioStream extends $Closeable {
        /**
         * Reads audio data from the stream and returns a byte buffer containing at most the specified number of bytes.
         * The method reads audio frames from the stream and adds them to the output buffer until the buffer contains at least the specified number of bytes or the end fo the stream is reached.
         * @return a byte buffer containing at most the specified number of bytes to read
         * @throws IOException if an I/O error occurs while reading the audio data
         */
        read(size: number): $ByteBuffer;
        /**
         * @return the AudioFormat of the stream
         */
        getFormat(): $AudioFormat;
        get format(): $AudioFormat;
    }
    /**
     * The MusicManager class manages the playing of music in Minecraft.
     */
    export class $MusicManager implements $IMixinMusicManager {
        /**
         * Stops playing the current Music selector.
         */
        tick(): void;
        /**
         * @return `true` if the Music selector is currently playing, `false` otherwise
         */
        isPlayingMusic(selector: $Music): boolean;
        /**
         * Starts playing the specified Music selector.
         */
        stopPlaying(selector: $Music): void;
        /**
         * Stops playing the current Music selector.
         */
        stopPlaying(): void;
        /**
         * Starts playing the specified Music selector.
         */
        startPlaying(selector: $Music): void;
        getCurrentMusic_FancyMenu(): $SoundInstance;
        constructor(minecraft: $Minecraft);
        get currentMusic_FancyMenu(): $SoundInstance;
    }
    /**
     * The ChannelAccess class provides access to channels for playing audio data using a given library and executor.
     */
    export class $ChannelAccess {
        clear(): void;
        scheduleTick(): void;
        executeOnChannels(sourceStreamConsumer: $Consumer_<$Stream<$Channel>>): void;
        /**
         * Creates a new channel handle for the specified system mode and returns a CompletableFuture that completes with the handle when it is created.
         * 
         * @return a CompletableFuture that completes with the channel handle when it is created, or null if it cannot be created
         */
        createHandle(systemMode: $Library$Pool_): $CompletableFuture<$ChannelAccess$ChannelHandle>;
        constructor(library: $Library, executor: $Executor_);
    }
    /**
     * The `SoundEngine` class handles the management and playback of sounds in the game.
     */
    export class $SoundEngine implements $IMixinSoundEngine {
        /**
         * Plays a given sound instance.
         * 
         * If the sound engine is not loaded or the sound instance cannot be played, the method returns early.
         * 
         * The method fulfills the following parts:
         * 
         * - Performs a series of checks to determine if it can play a sound
         * - Handles the playing of instances of `SoundInstance`
         * - Logs potential errors that may have occured
         * - Handles mapping instances of `SoundInstance` to specific audio channels
         * - Handles deletion times for active instances of `SoundInstance`
         * - Calculates and handles various sound properties such as volume, pitch, attenuation, looping, position and relative,
         * 
         * @implNote This method assumes proper synchronization or that thread confinement mechanisms are in place.
         */
        stop(sound: $SoundInstance): void;
        stop(soundName: $ResourceLocation_ | null, category: $SoundSource_ | null): void;
        /**
         * Cleans up the Sound System
         */
        resume(): void;
        /**
         * Cleans up the Sound System
         */
        destroy(): void;
        /**
         * @return `true` if the SoundInstance is active, `false` otherwise
         */
        isActive(sound: $SoundInstance): boolean;
        /**
         * Ticks all active instances of  `TickableSoundInstance`
         */
        tick(isGamePaused: boolean): void;
        /**
         * Cleans up the Sound System
         */
        reload(): void;
        /**
         * Cleans up the Sound System
         */
        stopAll(): void;
        /**
         * Adds a sound to play in n ticks
         */
        playDelayed(sound: $SoundInstance, delay: number): void;
        /**
         * Cleans up the Sound System
         */
        emergencyShutdown(): void;
        updateSource(renderInfo: $Camera): void;
        removeEventListener(listener: $SoundEventListener_): void;
        addEventListener(listener: $SoundEventListener_): void;
        getAvailableSoundDevices(): $List<string>;
        /**
         * Cleans up the Sound System
         */
        pause(): void;
        /**
         * Plays a given sound instance.
         * 
         * If the sound engine is not loaded or the sound instance cannot be played, the method returns early.
         * 
         * The method fulfills the following parts:
         * 
         * - Performs a series of checks to determine if it can play a sound
         * - Handles the playing of instances of `SoundInstance`
         * - Logs potential errors that may have occured
         * - Handles mapping instances of `SoundInstance` to specific audio channels
         * - Handles deletion times for active instances of `SoundInstance`
         * - Calculates and handles various sound properties such as volume, pitch, attenuation, looping, position and relative,
         * 
         * @implNote This method assumes proper synchronization or that thread confinement mechanisms are in place.
         */
        play(sound: $SoundInstance): void;
        /**
         * Updates the volume for a specific sound category.
         * 
         * If the sound engine has not been loaded, the method returns without performing any action.
         * 
         * If the category is the "MASTER" category, the overall listener gain (volume) is set to the specified value.
         * 
         * For other categories, the volume is updated for each sound instance associated with the category.
         * 
         * If the calculated volume for an instance is less than or equal to 0.0, the instance is stopped.
         * Otherwise, the volume of the instance is set to the calculated value.
         */
        updateCategoryVolume(category: $SoundSource_, volume: number): void;
        getListenerTransform(): $ListenerTransform;
        /**
         * Queues a new TickingCodeInstance
         */
        queueTickingSound(tickableSound: $TickableSoundInstance): void;
        getDebugString(): string;
        /**
         * Requests a specific Sound instance to be preloaded.
         */
        requestPreload(sound: $Sound): void;
        /**
         * The audio device change is checked by this method.
         * 
         * If the current audio device is disconnected, an informational message is logged, and this method returns `true` to indicate a change is needed.
         * 
         * Otherwise, the elapsed time since the last device check is examined.
         * If the elapsed time is greater than or equal to 1000 milliseconds, the device check is performed.
         * 
         * During the device check, the current device state is compared with the preferred sound device specified in the options.
         * 
         * - If the preferred sound device is an empty string and the system default audio device has changed, an informational message is logged, and the device pool state is set to indicate a change has been detected.
         * - If the preferred sound device is not an empty string, it is checked whether the current device name is different from the preferred device name and if the preferred device is available in the list of available sound devices.
         * - If both conditions are true, an informational message is logged, and the device pool state is set to indicate a change has been detected.
         * 
         * Finally, the device pool state is set to indicate that the device check is complete.
         * 
         * @return `true` if a change in the audio device is needed, `false` otherwise.
         */
        getLoadedMelody(): boolean;
        listeners: $List<$SoundEventListener>;
        static MISSING_SOUND: string;
        soundManager: $SoundManager;
        instanceToChannel: $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        instanceBySource: $Multimap<$SoundSource, $SoundInstance>;
        static OPEN_AL_SOFT_PREFIX: string;
        static OPEN_AL_SOFT_PREFIX_LENGTH: number;
        constructor(soundManager: $SoundManager, options: $Options, resourceManager: $ResourceProvider_);
        get availableSoundDevices(): $List<string>;
        get listenerTransform(): $ListenerTransform;
        get debugString(): string;
        get loadedMelody(): boolean;
    }
    /**
     * The SoundBufferLibrary class provides a cache containing instances of SoundBuffer and AudioStream for use in Minecraft sound handling.
     */
    export class $SoundBufferLibrary {
        /**
         * Clears the cache of all SoundBuffer instances.
         */
        clear(): void;
        /**
         * @return Returns a CompletableFuture containing the AudioStream. The AudioStream is loaded asynchronously.
         */
        getStream(resourceLocation: $ResourceLocation_, isWrapper: boolean): $CompletableFuture<$AudioStream>;
        /**
         * Preloads the SoundBuffer objects for the specified collection of sounds.
         * 
         * @return a CompletableFuture representing the completion of the preload operation
         */
        preload(sounds: $Collection_<$Sound>): $CompletableFuture<never>;
        /**
         * @return Returns a CompletableFuture containing the complete SoundBuffer. The SoundBuffer is loaded asynchronously and cached.
         */
        getCompleteBuffer(soundID: $ResourceLocation_): $CompletableFuture<$SoundBuffer>;
        constructor(resourceManager: $ResourceProvider_);
    }
    /**
     * The WeighedSoundEvents class represents a collection of weighted sound events.
     * It implements the Weighted interface to provide weighted selection of sounds.
     */
    export class $WeighedSoundEvents implements $Weighted<$Sound> {
        /**
         * Retrieves the total weight of the sound events.
         * The weight is calculated as the sum of the weights of all the individual sound events.
         * 
         * @return The total weight of the sound events
         */
        getWeight(): number;
        /**
         * @return The subtitle component, or `null` if no subtitle is provided
         */
        getSubtitle(): $Component;
        /**
         * Adds a sound event to the collection.
         */
        addSound(accessor: $Weighted<$Sound>): void;
        /**
         * Preloads the sound events into the sound engine if required.
         * This method is called to preload the sounds associated with the sound events into the sound engine, ensuring they are ready for playback.
         */
        preloadIfRequired(engine: $SoundEngine): void;
        /**
         * Retrieves the sound associated with the element.
         * The sound is obtained using the provided random source.
         * 
         * @return The sound associated with the element
         */
        getSound(randomSource: $RandomSource): $Sound;
        constructor(location: $ResourceLocation_, subtitleKey: string | null);
        get weight(): number;
        get subtitle(): $Component;
    }
}
